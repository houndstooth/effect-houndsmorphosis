import { END_ITERATION } from '../shared/customize'
import iterator from '../shared/iterator'
import drawSquare from './drawSquare'

export default (y, initial_size, striped_or_solid_layer, steady, layer_index, quarter) => {
	let growing_size = initial_size + 1
	let x = 0
	let color

	if (quarter[ 0 ] * quarter[ 1 ] == 1) {
		color = striped_or_solid_layer == 'striped' ? 'striped-c' : 'black'
	} else {
		color = striped_or_solid_layer == 'striped' ? 'striped-d' : 'white'
	}

	iterator(END_ITERATION).forEach(iter => {
		drawSquare(x, y, steady ? initial_size : growing_size, color, iter, layer_index, quarter)

		x += growing_size
		y += initial_size
		growing_size += 1

		if (striped_or_solid_layer == 'striped') {
			color = color == 'striped-d' ? 'striped-c' : 'striped-d'
		} else {
			color = color == 'white' ? 'black' : 'white'
		}
	})
}