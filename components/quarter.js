import { END_ITERATION } from '../../shared/common/customize'
import iterator from '../../shared/utilities/iterator'
import layer from './layer'

export default quarter => {
	let y = 0
	let size = 1

	iterator(END_ITERATION).forEach(() => {
		layer({
			y,
			initialSize: size - 1,
			stripedOrSolidLayer: quarter[ 0 ] == 1 ? 'STRIPED' : 'SOLID',
			steady: false,
			quarter
		})

		y += size

		layer({
			y,
			initialSize: size,
			stripedOrSolidLayer: quarter[ 0 ] == 1 ? 'SOLID' : 'STRIPED',
			steady: true,
			quarter
		})

		y += size
		size += 1
	})
}