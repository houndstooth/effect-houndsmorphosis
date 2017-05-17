import { END_ITERATION } from '../../shared/common/customize'
import iterator from '../../shared/utilities/iterator'
import standardHoundstoothSquare from '../../shared/components/standardHoundstoothSquare'
import adjustOrigin from '../utilities/adjustOrigin'
import initialSquareType from '../utilities/initialSquareType'
import nextSquareType from '../utilities/nextSquareType'

export default ({ y, initialSize, layerSquareType, layerSquareSizeBehavior, quarter }) => {
	let growingSize = initialSize + 1
	let x = 0
	let size
	let squareType = initialSquareType({ quarter, layerSquareType })

	iterator(END_ITERATION).forEach(() => {
		size = layerSquareSizeBehavior == 'STEADY' ? initialSize : growingSize
		standardHoundstoothSquare({
			origin: adjustOrigin({ origin: [ x, y ], quarter, size }),
			size,
			squareType,
			scaleFromGridCenter: true
		})

		x += growingSize
		y += initialSize
		growingSize += 1

		squareType = nextSquareType({ squareType, layerSquareType })
	})
}