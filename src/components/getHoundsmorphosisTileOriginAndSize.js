import mathUtilities from '../../../../src/utilities/mathUtilities'

export default ({ gridAddress }) => {
	if (gridAddress[ 0 ] === 0 || gridAddress[ 1 ] === 0) return { tileOrigin: null, tileSize: null }

	const addressX = Math.abs(gridAddress[ 0 ])
	const addressY = Math.abs(gridAddress[ 1 ])

	const baseSize = Math.floor(addressY / 2)

	let x = mathUtilities.trapezoidalNumber({ start: baseSize, height: addressX - 1 })
	let y = mathUtilities.quarterSquareNumber(addressY) + (addressX - 1) * baseSize

	let tileSize = addressY % 2 !== 0 ? addressX + baseSize : baseSize

	if (gridAddress[ 0 ] < 0) {
		x *= -1
		x -= tileSize
	}
	if (gridAddress[ 1 ] < 0) {
		y *= -1
		y -= tileSize
	}

	return { tileOrigin: [ x, y ], tileSize }
}
