import { END_ITERATION } from '../../shared/customize'
import iterator from '../../shared/iterator'
import square from './square'
import adjustOrigin from '../utilities/adjustOrigin'

export default ({y, initialSize, stripedOrSolidLayer, steady, layer, quarter}) => {
	let growingSize = initialSize + 1
	let x = 0
	let squareType

	if (quarter[ 0 ] * quarter[ 1 ] == 1) {
		squareType = stripedOrSolidLayer == 'STRIPED' ? 'STRIPED_A' : 'BLACK'
	} else {
		squareType = stripedOrSolidLayer == 'STRIPED' ? 'STRIPED_B' : 'WHITE'
	}

	iterator(END_ITERATION).forEach(iteration => {
		const size = steady ? initialSize : growingSize
		const origin = adjustOrigin({origin: [x, y], quarter, size})
		square({origin, size, squareType, iteration, layer, quarter})

		x += growingSize
		y += initialSize
		growingSize += 1

		if (stripedOrSolidLayer == 'STRIPED') {
			squareType = squareType == 'STRIPED_B' ? 'STRIPED_A' : 'STRIPED_B'
		} else {
			squareType = squareType == 'WHITE' ? 'BLACK' : 'WHITE'
		}
	})
}