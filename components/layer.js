import { END_ITERATION } from '../../shared/common/customize'
import iterator from '../../shared/utilities/iterator'
import square from './square'
import adjustOrigin from '../utilities/adjustOrigin'

export default ({ y, initialSize, stripedOrSolidLayer, steady, quarter }) => {
	let growingSize = initialSize + 1
	let x = 0
	let squareType

	if (quarter[ 0 ] * quarter[ 1 ] == 1) {
		squareType = stripedOrSolidLayer == 'STRIPED' ? 'STRIPED_A' : 'BLACK'
	} else {
		squareType = stripedOrSolidLayer == 'STRIPED' ? 'STRIPED_B' : 'WHITE'
	}

	iterator(END_ITERATION).forEach(() => {
		const size = steady ? initialSize : growingSize
		const origin = adjustOrigin({ origin: [ x, y ], quarter, size })
		square({ origin, size, squareType })

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