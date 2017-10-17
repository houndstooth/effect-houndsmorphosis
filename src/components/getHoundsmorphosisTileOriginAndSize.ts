import { trapezoidalNumber, quarterSquareNumber } from '../../../../src/utilities/mathUtilities'
import { TileOriginAndSize, Address, Coordinate, Units } from '../../../../src'

const getHoundsmorphosisTileOriginAndSize: {
	({}: { gridAddress: Address }): TileOriginAndSize | undefined,
} = ({ gridAddress }) => {
	if (gridAddress[ 0 ] === 0 || gridAddress[ 1 ] === 0) {
		return undefined
	}

	const addressX = Math.abs(gridAddress[ 0 ])
	const addressY = Math.abs(gridAddress[ 1 ])

	const baseSize = Math.floor(addressY / 2) as any

	const tileSize = houndsmorphosisTileSize({ baseSize, addressX, addressY })
	const tileOrigin = houndsmorphosisTileOrigin({ baseSize, addressX, addressY, tileSize, gridAddress })

	return { tileOrigin, tileSize } as TileOriginAndSize
}

const houndsmorphosisTileSize: {
	({}: { addressX: number, addressY: number, baseSize: Units }): Units,
} = ({ addressX, addressY, baseSize }) => {
	const baseSizeAsNumber = baseSize as any

	return addressY % 2 !== 0 ? addressX as any + baseSizeAsNumber : baseSize as any
}

const houndsmorphosisTileOrigin: {
	({}: {
		addressX: number,
		addressY: number,
		baseSize: Units,
		gridAddress: Address,
		tileSize: Units,
	}): Coordinate,
} = ({ addressX, addressY, baseSize, gridAddress, tileSize }) => {
	let x = trapezoidalNumber({ start: baseSize as any, height: addressX - 1 })
	let y = baseSize as any * (addressX - 1) + quarterSquareNumber(addressY)

	if (gridAddress[ 0 ] < 0) {
		x *= -1
		x -= tileSize as any
	}
	if (gridAddress[ 1 ] < 0) {
		y *= -1
		y -= tileSize as any
	}

	return [ x as any, y as any ] as Coordinate
}

export default getHoundsmorphosisTileOriginAndSize
