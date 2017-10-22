import { Address, Coordinate, from, TileOriginAndSize, to, Unit } from '../../../../src'
import { isOdd, quarterSquareNumber, trapezoidalNumber } from '../../../../src/utilities/mathUtilities'

const ROW_TYPE_COUNT = 2

const getHoundsmorphosisTileOriginAndSize: (_: {
	gridAddress: Address[],
}) => TileOriginAndSize | undefined = ({ gridAddress }) => {
	const [ x, y ] = from.Address(gridAddress)
	if (x === 0 || y === 0) {
		return undefined
	}

	const absoluteX = Math.abs(x)
	const absoluteY = Math.abs(y)

	const baseSize = to.Unit(Math.floor(absoluteY / ROW_TYPE_COUNT))

	const tileSize = houndsmorphosisTileSize({ baseSize, absoluteX, absoluteY })
	const tileOrigin = houndsmorphosisTileOrigin({ baseSize, absoluteX, absoluteY, tileSize, gridAddress })

	return { tileOrigin, tileSize }
}

const houndsmorphosisTileSize: (_: {
	absoluteX: number, absoluteY: number, baseSize: Unit,
}) => Unit = ({ absoluteX, absoluteY, baseSize }) =>
	to.Unit(isOdd(absoluteY) ? absoluteX + from.Unit(baseSize) : from.Unit(baseSize))

const houndsmorphosisTileOrigin: (_: {
	absoluteX: number, absoluteY: number, baseSize: Unit, gridAddress: Address[], tileSize: Unit,
}) => Coordinate = ({ absoluteX, absoluteY, baseSize, gridAddress, tileSize }) => {
	let x = trapezoidalNumber({ start: from.Unit(baseSize), height: absoluteX - 1 })
	let y = from.Unit(baseSize) * (absoluteX - 1) + quarterSquareNumber(absoluteY)

	const [ addressX, addressY ] = from.Address(gridAddress)
	if (addressX < 0) {
		x *= -1
		x -= from.Unit(tileSize)
	}
	if (addressY < 0) {
		y *= -1
		y -= from.Unit(tileSize)
	}

	return to.Coordinate([ x, y ])
}

export { getHoundsmorphosisTileOriginAndSize }
