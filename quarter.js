import { END_ITERATION } from '../shared/customize'
import iterator from '../shared/iterator'
import layer from './layer'

export default quarter => {
	let y = 0
	let size = 1

	iterator(END_ITERATION).forEach(iter => {
		layer(y, size - 1, quarter[ 0 ] == 1 ? 'striped' : 'solid', false, iter, quarter)
		y += size
		layer(y, size, quarter[ 0 ] == 1 ? 'solid' : 'striped', true, iter, quarter)
		y += size
		size += 1
	})
}