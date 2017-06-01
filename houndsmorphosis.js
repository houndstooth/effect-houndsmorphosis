import iterator from '../shared/utilities/iterator'
import state from '../shared/state/state'
import tile from '../shared/components/tile'

const QUARTERS = [
	[ 1, 1 ],
	[ -1, 1 ],
	[ 1, -1 ],
	[ -1, -1 ]
]

const COLORS = {
	"SOLID_A": [ 0, 0 ],
	"SOLID_B": [ 1, 1 ],
	"STRIPED_A": [ 0, 1 ],
	"STRIPED_B": [ 1, 0 ]
}

const DAZZLE = {
	"SOLID_A": [ 1, 1 ],
	"SOLID_B": [ 0, 0 ],
	"STRIPED_A": [ 1, 0 ],
	"STRIPED_B": [ 0, 1 ]
}

const nextTileType = ({ tileType, layerTileType }) => {
	if (layerTileType === 'STRIPED') {
		return tileType === 'STRIPED_B' ? 'STRIPED_A' : 'STRIPED_B'
	}

	return tileType === 'SOLID_A' ? 'SOLID_B' : 'SOLID_A'
}

const initialTileType = ({ quarter, layerTileType }) => {
	if (quarter[ 0 ] * quarter[ 1 ] === 1) {
		return layerTileType === 'STRIPED' ? 'STRIPED_A' : 'SOLID_B'
	}

	return layerTileType === 'STRIPED' ? 'STRIPED_B' : 'SOLID_A'
}

const adjustAddress = ({ unadjustedAddress, quarter, size }) => {
	const { tileSize, canvasSize } = state.shared
	const canvasCenter = [ canvasSize / 2, canvasSize / 2 ]

	const adjustedAddress = [ null, null ]
	if (quarter[ 0 ] === 1) {
		adjustedAddress[ 0 ] = canvasCenter[ 0 ] + unadjustedAddress[ 0 ]
	} else {
		adjustedAddress[ 0 ] = canvasCenter[ 0 ] + (unadjustedAddress[ 0 ] + size) * quarter[ 0 ]
	}
	if (quarter[ 1 ] === 1) {
		adjustedAddress[ 1 ] = canvasCenter[ 1 ] + unadjustedAddress[ 1 ]
	} else {
		adjustedAddress[ 1 ] = canvasCenter[ 1 ] + (unadjustedAddress[ 1 ] + size) * quarter[ 1 ]
	}
	adjustedAddress[ 0 ] /= tileSize
	adjustedAddress[ 1 ] /= tileSize

	return adjustedAddress
}

const calculateEntry = ({ tileType, set, mapping }) => {
	const indices = mapping[ tileType ]
	return [ set[ indices[ 0 ] ], set[ indices[ 1 ] ] ]
}

const houndsmorphosisTile = ({ unadjustedAddress, options }) => {
	const { initialSize, growingSize, tileType, layerTileSizeBehavior, quarter } = options
	const size = layerTileSizeBehavior === 'STEADY' ? initialSize : growingSize

	const { colorConfig } = state.shared
	const { set, houndazzle } = colorConfig
	const colors = calculateEntry({ tileType, set, mapping: COLORS })
	const initialDazzle = {
		colors: calculateEntry({ tileType, set: houndazzle && houndazzle.colorConfig && houndazzle.colorConfig.set || set, mapping: DAZZLE }),
		orientations: calculateEntry({ tileType, set: houndazzle && houndazzle.orientationConfig && houndazzle.orientationConfig.set || set, mapping: DAZZLE })
	}
	const address = adjustAddress({ unadjustedAddress, quarter, size })
	const scaleFromGridCenter = true

	tile({ address, size, colors, scaleFromGridCenter, initialDazzle })
}

const layer = ({ y, initialSize, layerTileType, layerTileSizeBehavior, quarter }) => {
	let growingSize = initialSize + 1
	let x = 0
	let tileType = initialTileType({ quarter, layerTileType })

	iterator(state.houndsmorphosis.endIteration).forEach(() => {
		const options = { layerTileSizeBehavior, growingSize, initialSize, tileType, quarter }
		houndsmorphosisTile({ unadjustedAddress: [ x, y ], options })

		x += growingSize
		y += initialSize
		growingSize += 1

		tileType = nextTileType({ tileType, layerTileType })
	})
}

const quarter = quarter => {
	let y = 0
	let size = 1

	iterator(state.houndsmorphosis.endIteration).forEach(() => {
		layer({
			y,
			initialSize: size - 1,
			layerTileType: quarter[ 0 ] === 1 ? 'STRIPED' : 'SOLID',
			layerTileSizeBehavior: 'GROWING',
			quarter
		})

		y += size

		layer({
			y,
			initialSize: size,
			layerTileType: quarter[ 0 ] === 1 ? 'SOLID' : 'STRIPED',
			layerTileSizeBehavior: 'STEADY',
			quarter
		})

		y += size
		size += 1
	})
}

export default () => QUARTERS.forEach(quarter)
