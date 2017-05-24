import iterator from '../shared/utilities/iterator'
import state from '../shared/state/state'
import tile from '../shared/components/tile'
import convertSquareTypeToColors from '../shared/utilities/convertSquareTypeToColors'

const QUARTERS = [
	[ 1, 1 ],
	[ -1, 1 ],
	[ 1, -1 ],
	[ -1, -1 ]
]

const nextSquareType = ({ squareType, layerSquareType }) => {
	if (layerSquareType === 'STRIPED') {
		return squareType === 'STRIPED_B' ? 'STRIPED_A' : 'STRIPED_B'
	}

	return squareType === 'SOLID_A' ? 'SOLID_B' : 'SOLID_A'
}


const initialSquareType = ({ quarter, layerSquareType }) => {
	if (quarter[ 0 ] * quarter[ 1 ] === 1) {
		return layerSquareType === 'STRIPED' ? 'STRIPED_A' : 'SOLID_B'
	}

	return layerSquareType === 'STRIPED' ? 'STRIPED_B' : 'SOLID_A'
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

const houndsmorphosisTile = ({ origin: initialOrigin, options }) => {
	const { initialSize, growingSize, squareType, layerSquareSizeBehavior, quarter } = options
	const size = layerSquareSizeBehavior === 'STEADY' ? initialSize : growingSize
	const colors = convertSquareTypeToColors({ squareType })
	const origin = adjustOrigin({ initialOrigin, quarter, size })
	const scaleFromGridCenter = true

	tile({ origin, size, colors, scaleFromGridCenter })
}

const layer = ({ y, initialSize, layerSquareType, layerSquareSizeBehavior, quarter }) => {
	let growingSize = initialSize + 1
	let x = 0
	let squareType = initialSquareType({ quarter, layerSquareType })

	iterator(state.houndsmorphosis.endIteration).forEach(() => {
		const options = { layerSquareSizeBehavior, growingSize, initialSize, squareType, quarter }
		houndsmorphosisTile({ origin: [ x, y ], options })

		x += growingSize
		y += initialSize
		growingSize += 1

		squareType = nextSquareType({ squareType, layerSquareType })
	})
}

const quarter = quarter => {
	let y = 0
	let size = 1

	iterator(state.houndsmorphosis.endIteration).forEach(() => {
		layer({
			y,
			initialSize: size - 1,
			layerSquareType: quarter[ 0 ] === 1 ? 'STRIPED' : 'SOLID',
			layerSquareSizeBehavior: 'GROWING',
			quarter
		})

		y += size

		layer({
			y,
			initialSize: size,
			layerSquareType: quarter[ 0 ] === 1 ? 'SOLID' : 'STRIPED',
			layerSquareSizeBehavior: 'STEADY',
			quarter
		})

		y += size
		size += 1
	})
}

export default () => QUARTERS.forEach(quarter)
