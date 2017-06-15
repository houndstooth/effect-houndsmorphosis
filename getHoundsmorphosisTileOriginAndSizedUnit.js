import transpositionUtilities from '../../utilities/transpositionUtilities'
import mathUtilities from '../../utilities/mathUtilities'
import state from '../../state/state'

export default ({ address }) => {
	if (address[ 0 ] === 0 || address[ 1 ] === 0) return { tileOrigin: null, sizedUnit: null }

	const addressX = Math.abs(address[ 0 ])
	const addressY = Math.abs(address[ 1 ])

	const baseSize = Math.floor(addressY / 2)

	let x = mathUtilities.trapezoidalNumber({ start: baseSize, height: addressX - 1 })
	let y = mathUtilities.quarterSquareNumber(addressY) + (addressX - 1) * baseSize

	let size = addressY % 2 !== 0 ? addressX + baseSize : baseSize

	if (address[ 0 ] < 0) {
		x *= -1
		x -= size
	}
	if (address[ 1 ] < 0) {
		y *= -1
		y -= size
	}

	const sizedUnit = size * state.viewConfig.zoom
	const tileOrigin = transpositionUtilities.adjustOrigin({ tileOrigin: [ x, y ] })
	return { tileOrigin, sizedUnit }
}
