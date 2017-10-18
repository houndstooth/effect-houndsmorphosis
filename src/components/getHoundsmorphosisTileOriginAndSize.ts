import { Address, constants, Coordinate, TileOriginAndSize, Units } from '../../../../src'
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

	const baseSize = Math.floor(addressY / ROW_TYPE_COUNT) as any

	const tileSize = houndsmorphosisTileSize({ baseSize, addressX, addressY })
	const tileOrigin = houndsmorphosisTileOrigin({ baseSize, addressX, addressY, tileSize, gridAddress })

	return { tileOrigin, tileSize } as TileOriginAndSize
}

const houndsmorphosisTileSize: (_: {
	addressX: number, addressY: number, baseSize: Units,
}) => Units = ({ addressX, addressY, baseSize }) => {
	const baseSizeAsNumber = baseSize as any

	return isOdd(addressY) ? addressX as any + baseSizeAsNumber : baseSize as any
}

const houndsmorphosisTileOrigin: (_: {
	addressX: number, addressY: number, baseSize: Units, gridAddress: Address, tileSize: Units,
}) => Coordinate = ({ addressX, addressY, baseSize, gridAddress, tileSize }) => {
	let x = trapezoidalNumber({ start: baseSize as any, height: addressX - 1 })
	let y = baseSize as any * (addressX - 1) + quarterSquareNumber(addressY)

	if (gridAddress[ X_INDEX ] < 0) {
		x *= -1
		x -= tileSize as any
	}
	if (gridAddress[ Y_INDEX ] < 0) {
		y *= -1
		y -= tileSize as any
	}

	return [ x as any, y as any ] as Coordinate
}

export default getHoundsmorphosisTileOriginAndSize
