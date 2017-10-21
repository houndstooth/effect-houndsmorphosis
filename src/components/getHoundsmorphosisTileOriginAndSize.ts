import { Address, constants, Coordinate, from, TileOriginAndSize, to, Unit } from '../../../../src'
import { isOdd, quarterSquareNumber, trapezoidalNumber } from '../../../../src/utilities/mathUtilities'

const ROW_TYPE_COUNT = 2
const X_INDEX = constants.X_INDEX
const Y_INDEX = constants.Y_INDEX

const getHoundsmorphosisTileOriginAndSize: (_: {
	gridAddress: Address,
}) => TileOriginAndSize | undefined = ({ gridAddress }) => {
	if (gridAddress[ X_INDEX ] === 0 || gridAddress[ Y_INDEX ] === 0) {
		return undefined
	}

	const addressX = Math.abs(gridAddress[ X_INDEX ])
	const addressY = Math.abs(gridAddress[ Y_INDEX ])

	const baseSize = to.Unit(Math.floor(addressY / ROW_TYPE_COUNT))

	const tileSize = houndsmorphosisTileSize({ baseSize, addressX, addressY })
	const tileOrigin = houndsmorphosisTileOrigin({ baseSize, addressX, addressY, tileSize, gridAddress })

	return { tileOrigin, tileSize }
}

const houndsmorphosisTileSize: (_: {
	addressX: number, addressY: number, baseSize: Unit,
}) => Unit = ({ addressX, addressY, baseSize }) =>
	to.Unit(isOdd(addressY) ? addressX + from.Unit(baseSize) : from.Unit(baseSize))

const houndsmorphosisTileOrigin: (_: {
	addressX: number, addressY: number, baseSize: Unit, gridAddress: Address, tileSize: Unit,
}) => Coordinate = ({ addressX, addressY, baseSize, gridAddress, tileSize }) => {
	let x = trapezoidalNumber({ start: from.Unit(baseSize), height: addressX - 1 })
	let y = from.Unit(baseSize) * (addressX - 1) + quarterSquareNumber(addressY)

	if (gridAddress[ X_INDEX ] < 0) {
		x *= -1
		x -= from.Unit(tileSize)
	}
	if (gridAddress[ Y_INDEX ] < 0) {
		y *= -1
		y -= from.Unit(tileSize)
	}

	return to.Coordinate([ x, y ])
}

export { getHoundsmorphosisTileOriginAndSize }
