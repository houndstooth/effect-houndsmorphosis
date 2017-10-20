import { Address, constants, Coordinate, from, TileOriginAndSize, to, Units } from '../../../../src'
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

	const baseSize = to.Units(Math.floor(addressY / ROW_TYPE_COUNT))

	const tileSize = houndsmorphosisTileSize({ baseSize, addressX, addressY })
	const tileOrigin = houndsmorphosisTileOrigin({ baseSize, addressX, addressY, tileSize, gridAddress })

	return { tileOrigin, tileSize }
}

const houndsmorphosisTileSize: (_: {
	addressX: number, addressY: number, baseSize: Units,
}) => Units = ({ addressX, addressY, baseSize }) =>
	to.Units(isOdd(addressY) ? addressX + from.Units(baseSize) : from.Units(baseSize))

const houndsmorphosisTileOrigin: (_: {
	addressX: number, addressY: number, baseSize: Units, gridAddress: Address, tileSize: Units,
}) => Coordinate = ({ addressX, addressY, baseSize, gridAddress, tileSize }) => {
	let x = trapezoidalNumber({ start: from.Units(baseSize), height: addressX - 1 })
	let y = from.Units(baseSize) * (addressX - 1) + quarterSquareNumber(addressY)

	if (gridAddress[ X_INDEX ] < 0) {
		x *= -1
		x -= from.Units(tileSize)
	}
	if (gridAddress[ Y_INDEX ] < 0) {
		y *= -1
		y -= from.Units(tileSize)
	}

	return to.Coordinate([ x, y ])
}

export { getHoundsmorphosisTileOriginAndSize }
