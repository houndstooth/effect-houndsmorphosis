import iterator from '../shared/utilities/iterator'
import state from '../shared/state/state'
import tile from '../shared/components/tile'

const QUARTERS = [
	[ 1, 1 ],
	[ -1, 1 ],
	[ 1, -1 ],
	[ -1, -1 ]
]

const TILE_TYPE_TO_COLORS_INDICES_MAPPING = {
	"SOLID_A": [ 0, 0 ],
	"SOLID_B": [ 1, 1 ],
	"STRIPED_A": [ 0, 1 ],
	"STRIPED_B": [ 1, 0 ]
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

const adjustOrigin = ({ initialOrigin, quarter, size }) => {
	const { tileSize, canvasSize } = state.shared
	const canvasCenter = [ canvasSize / 2, canvasSize / 2 ]

	const adjustedOrigin = [ null, null ]
	if (quarter[ 0 ] === 1) {
		adjustedOrigin[ 0 ] = canvasCenter[ 0 ] + initialOrigin[ 0 ]
	} else {
		adjustedOrigin[ 0 ] = canvasCenter[ 0 ] + (initialOrigin[ 0 ] + size) * quarter[ 0 ]
	}
	if (quarter[ 1 ] === 1) {
		adjustedOrigin[ 1 ] = canvasCenter[ 1 ] + initialOrigin[ 1 ]
	} else {
		adjustedOrigin[ 1 ] = canvasCenter[ 1 ] + (initialOrigin[ 1 ] + size) * quarter[ 1 ]
	}
	adjustedOrigin[ 0 ] /= tileSize
	adjustedOrigin[ 1 ] /= tileSize

	return adjustedOrigin
}

const calculateColors = ({ tileType }) => {
	const colors = state.shared.color.colors
	const indices = TILE_TYPE_TO_COLORS_INDICES_MAPPING[ tileType ]
	return [
		colors[ indices[ 0 ] ],
		colors[ indices[ 1 ] ]
	]
}

const houndsmorphosisTile = ({ origin: initialOrigin, options }) => {
	const { initialSize, growingSize, tileType, layerTileSizeBehavior, quarter } = options
	const size = layerTileSizeBehavior === 'STEADY' ? initialSize : growingSize
	const colors = calculateColors({ tileType })
	const origin = adjustOrigin({ initialOrigin, quarter, size })
	const scaleFromGridCenter = true

	tile({ origin, size, colors, scaleFromGridCenter })
}

const layer = ({ y, initialSize, layerTileType, layerTileSizeBehavior, quarter }) => {
	let growingSize = initialSize + 1
	let x = 0
	let tileType = initialTileType({ quarter, layerTileType })

	iterator(state.houndsmorphosis.endIteration).forEach(() => {
		const options = { layerTileSizeBehavior, growingSize, initialSize, tileType, quarter }
		houndsmorphosisTile({ origin: [ x, y ], options })

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
