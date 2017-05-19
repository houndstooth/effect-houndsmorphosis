import { CENTER } from '../../shared/common/constants'
import { SQUARE_SIZE } from '../../shared/common/customize'

export default ({ initialOrigin, quarter, size }) => {
	const adjustedOrigin = [ null, null ]
	if (quarter[ 0 ] === 1) {
		adjustedOrigin[ 0 ] = CENTER[ 0 ] + initialOrigin[ 0 ]
	} else {
		adjustedOrigin[ 0 ] = CENTER[ 0 ] + (initialOrigin[ 0 ] + size) * quarter[ 0 ]
	}
	if (quarter[ 1 ] === 1) {
		adjustedOrigin[ 1 ] = CENTER[ 1 ] + initialOrigin[ 1 ]
	} else {
		adjustedOrigin[ 1 ] = CENTER[ 1 ] + (initialOrigin[ 1 ] + size) * quarter[ 1 ]
	}
	adjustedOrigin[ 0 ] /= SQUARE_SIZE
	adjustedOrigin[ 1 ] /= SQUARE_SIZE

	return adjustedOrigin
}
