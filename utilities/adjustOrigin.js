import state from '../../state'

export default ({ initialOrigin, quarter, size }) => {
	const { tileSize, canvasSize } = state.shared
	const canvasCenter = [ canvasSize / 2, canvasSize / 2 ]

	const adjustedOrigin = [ null, null ]
	if (quarter[ 0 ] === 1) {
		adjustedOrigin[ 0 ] = canvasCenter[ 0 ] + initialOrigin[ 0 ]
	} else {
		adjustedOrigin[ 0 ] = canvasCenter[ 0 ] + (initialOrigin[ 0 ] + size) * quarter[ 0 ]
	}
	if (quarter[ 1 ] === 1) {
		adjustedOrigin[ 1 ] = canvasCenter[ 1 ] + initialOrigin[ 1 ]
	} else {
		adjustedOrigin[ 1 ] = canvasCenter[ 1 ] + (initialOrigin[ 1 ] + size) * quarter[ 1 ]
	}
	adjustedOrigin[ 0 ] /= tileSize
	adjustedOrigin[ 1 ] /= tileSize

	return adjustedOrigin
}
