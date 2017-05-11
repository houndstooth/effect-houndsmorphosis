import { END_ITERATION } from '../shared/customize'
import iterator from '../shared/iterator'
import drawSquare from './drawSquare'
import originAdjust from './originAdjust'

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
		const origin = originAdjust({origin: [x, y], quarter, size})
		drawSquare({origin, size, squareType, iteration, layer, quarter})

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