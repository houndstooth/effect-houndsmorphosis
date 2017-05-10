import { END_ITERATION } from '../shared/customize'
import iterator from '../shared/iterator'
import drawSquare from './drawSquare'

export default (y, initialSize, stripedOrSolidLayer, steady, layer, quarter) => {
	let growing_size = initialSize + 1
	let x = 0
	let color

	if (quarter[ 0 ] * quarter[ 1 ] == 1) {
		color = stripedOrSolidLayer == 'striped' ? 'striped-c' : 'black'
	} else {
		color = stripedOrSolidLayer == 'striped' ? 'striped-d' : 'white'
	}

	iterator(END_ITERATION).forEach(iter => {
		drawSquare(x, y, steady ? initialSize : growing_size, color, iter, layer, quarter)

		x += growing_size
		y += initialSize
		growing_size += 1

		if (stripedOrSolidLayer == 'striped') {
			color = color == 'striped-d' ? 'striped-c' : 'striped-d'
		} else {
			color = color == 'white' ? 'black' : 'white'
		}
	})
}