import { END_ITERATION } from '../shared/customize'
import iterator from '../shared/iterator'
import drawSquare from './drawSquare'

const COORDINATES = [
	[ 1, 1 ],
	[ -1, 1 ],
	[ 1, -1 ],
	[ -1, -1 ]
]

let current_coordinate, y, size, color

const quarter = () => {
	y = 0
	size = 1

	iterator(END_ITERATION).forEach(iter => {
		layer(y, size - 1, current_coordinate[ 0 ] == 1 ? 'striped' : 'solid', false, iter)
		y += size
		layer(y, size, current_coordinate[ 0 ] == 1 ? 'solid' : 'striped', true, iter)
		y += size
		size += 1
	})
}

const layer = (y, initial_size, striped_or_solid_layer, steady, layer_index) => {
	let growing_size = initial_size + 1
	let x = 0


	if (current_coordinate[ 0 ] * current_coordinate[ 1 ] == 1) {
		color = striped_or_solid_layer == 'striped' ? 'striped-c' : 'black'
	} else {
		color = striped_or_solid_layer == 'striped' ? 'striped-d' : 'white'
	}

	iterator(END_ITERATION).forEach(iter => {
		drawSquare(x, y, steady ? initial_size : growing_size, color, iter, layer_index, current_coordinate)

		x += growing_size
		y += initial_size
		growing_size += 1

		if (striped_or_solid_layer == 'striped') {
			color = color == 'striped-d' ? 'striped-c' : 'striped-d'
		} else {
			color = color == 'white' ? 'black' : 'white'
		}

		//this is the bit that forcibly tries to make just stripes in the middle right area
		//but it's too inelegant and ugly to be worth it
		//instead, i just made cusps smaller and roots bigger
		//so you get that kind of native american looking motif
		//that's what the hbf stuff is about

		//ah ha! or i could combine the impulses
		//and just have the striped squares have their own parallel transformation
		//from totally normal on the left (where they are tiny)
		//gradually until the cusps are gone on the right
		//so that way they become contiguous stripes

		// console.log(iter, ITERATIONS - layer_index)
		// if (current_coordinate[0] == 1 && iter > layer_index) {
		//   if (striped_or_solid_layer == 'striped') {
		//     color = 'striped-d'
		//   } else {
		//     // color = 'white'
		//   }
		// }
	})
}

export default () => {
	COORDINATES.forEach(coordinate => {
		current_coordinate = coordinate
		quarter()
	})
}