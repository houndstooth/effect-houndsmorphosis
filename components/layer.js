import { END_ITERATION } from '../../shared/common/customize'
import iterator from '../../shared/utilities/iterator'
import square from './square'
import adjustOrigin from '../utilities/adjustOrigin'
import calculateInitialSquareType from '../utilities/calculateInitialSquareType'
import calculateNextSquareType from '../utilities/calculateNextSquareType'

export default ({ y, initialSize, stripedOrSolidLayer, steady, quarter }) => {
	let growingSize = initialSize + 1
	let x = 0
	let size
	let squareType = calculateInitialSquareType({quarter, stripedOrSolidLayer})

	iterator(END_ITERATION).forEach(() => {
		size = steady ? initialSize : growingSize
		square({
			origin: adjustOrigin({ origin: [ x, y ], quarter, size }),
			size,
			squareType
		})

		x += growingSize
		y += initialSize
		growingSize += 1

		squareType = calculateNextSquareType({squareType, stripedOrSolidLayer})
	})
}