import transpositionUtilities from '../shared/utilities/transpositionUtilities'
import mathUtilities from '../shared/utilities/mathUtilities'
import state from '../shared/state/state'

export default ({ address }) => {
	const addressX = address[ 0 ]
	const addressY = address[ 1 ]

	// what if we solved the problem by eliminating every tile located on either axis ?
	// that is, none of this preferring [ 0, 0 ] into the bottom right quadrant
	// if (addressX === 0 || addressY === 0) return { origin: null, sizedUnit: null }

	// base size is used in everything
	const size = Math.abs(Math.ceil(addressY / 2))

	// x
	const thingOne = addressY < 0 ? Math.abs(addressX) : 0
	const thingTwo = addressX < 0 ? Math.abs(addressX) : 0
	const thing = addressY % 2 === 0 ? thingOne : thingTwo
	let x = mathUtilities.trapezoidalNumber({
			start: size,
			height: Math.abs(addressX)
		})
		-
		thing

	// y
	const sizeScalarX = addressX < 0 ? Math.abs(addressX + 1) : addressX
	const sizeScalarY = addressY < 0 ? addressY : addressY + 1
	let y = mathUtilities.quarterSquareNumber(sizeScalarY)
		+
		sizeScalarX * size

	// put in correct quadrant
	if (addressX < 0) x *= -1
	if (addressY < 0) y *= -1

	// size
	const scalarX = addressX < 0 ? -0.5 : 0.5
	const scalarY = addressY < 0 ? -0.5 : 0.5
	const growingSize = Math.abs(addressX) + size + scalarX + scalarY
	let sizedUnit = addressY % 2 === 0 ? growingSize : size
	sizedUnit *= state.unit

	const origin = transpositionUtilities.adjustOrigin({ origin: [ x, y ] })
	return { origin, sizedUnit }
}