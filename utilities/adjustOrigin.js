import { CENTER } from '../../shared/common/constants'

export default ({ origin, quarter, size }) => {
	const adjustedOrigin = [ null, null ]
	if (quarter[ 0 ] == 1) {
		adjustedOrigin[ 0 ] = CENTER[ 0 ] + origin[ 0 ]
	} else {
		adjustedOrigin[ 0 ] = CENTER[ 0 ] + (origin[ 0 ] + size) * quarter[ 0 ]
	}
	if (quarter[ 1 ] == 1) {
		adjustedOrigin[ 1 ] = CENTER[ 1 ] + origin[ 1 ]
	} else {
		adjustedOrigin[ 1 ] = CENTER[ 1 ] + (origin[ 1 ] + size) * quarter[ 1 ]
	}
	return adjustedOrigin
}
