import { END_ITERATION } from '../../shared/common/customize'
import { SQUARE_TYPE_TO_COLORS_MAPPING } from '../../shared/common/constants'
import iterator from '../../shared/utilities/iterator'
import tile from '../../shared/components/tile'
import adjustOrigin from '../utilities/adjustOrigin'
import initialSquareType from '../utilities/initialSquareType'
import nextSquareType from '../utilities/nextSquareType'

export default ({ y, initialSize, layerSquareType, layerSquareSizeBehavior, quarter }) => {
	let growingSize = initialSize + 1
	let x = 0
	let size
	let squareType = initialSquareType({ quarter, layerSquareType })

	iterator(END_ITERATION).forEach(() => {
		size = layerSquareSizeBehavior === 'STEADY' ? initialSize : growingSize
		const { originColor, otherColor } = SQUARE_TYPE_TO_COLORS_MAPPING[ squareType ]
		tile({
			origin: adjustOrigin({ origin: [ x, y ], quarter, size }),
			size,
			originColor,
			otherColor,
			scaleFromGridCenter: true
		})

		x += growingSize
		y += initialSize
		growingSize += 1

		squareType = nextSquareType({ squareType, layerSquareType })
	})
}