import { END_ITERATION } from '../shared/customize'
import iterator from '../shared/iterator'
import layer from './layer'

const COORDINATES = [
	[ 1, 1 ],
	[ -1, 1 ],
	[ 1, -1 ],
	[ -1, -1 ]
]

let current_coordinate, y, size

const quarter = () => {
	y = 0
	size = 1

	iterator(END_ITERATION).forEach(iter => {
		layer(y, size - 1, current_coordinate[ 0 ] == 1 ? 'striped' : 'solid', false, iter, current_coordinate)
		y += size
		layer(y, size, current_coordinate[ 0 ] == 1 ? 'solid' : 'striped', true, iter, current_coordinate)
		y += size
		size += 1
	})
}

export default () => {
	COORDINATES.forEach(coordinate => {
		current_coordinate = coordinate
		quarter()
	})
}