import { END_ITERATION } from '../shared/customize'
import iterator from '../shared/iterator'
import layer from './layer'

export default quarter => {
	let y = 0
	let size = 1

	iterator(END_ITERATION).forEach(iteration => {
		layer({
			y,
			initialSize: size - 1,
			stripedOrSolidLayer: quarter[ 0 ] == 1 ? 'STRIPED' : 'SOLID',
			steady: false,
			layer: iteration,
			quarter
		})

		y += size

		layer({
			y,
			initialSize: size,
			stripedOrSolidLayer: quarter[ 0 ] == 1 ? 'SOLID' : 'STRIPED',
			steady: true,
			layer: iteration,
			quarter
		})

		y += size
		size += 1
	})
}