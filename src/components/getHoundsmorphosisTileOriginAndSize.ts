import { trapezoidalNumber, quarterSquareNumber } from '../../../../src/utilities/mathUtilities'
import { TileOriginAndSize, Address, Coordinate, Units } from '../../../../src'

const getHoundsmorphosisTileOriginAndSize: {
	({}: { gridAddress: Address }): TileOriginAndSize,
} = ({ gridAddress }) => {
	if (gridAddress[ 0 ] === 0 || gridAddress[ 1 ] === 0) {
		return { tileOrigin: undefined, tileSize: undefined }
	}

	const addressX = Math.abs(gridAddress[ 0 ])
	const addressY = Math.abs(gridAddress[ 1 ])

	const baseSize = Math.floor(addressY / 2) as any

	const tileSize = houndsmorphosisTileSize({ baseSize, addressX, addressY })
	const tileOrigin = houndsmorphosisTileOrigin({ baseSize, addressX, addressY, tileSize, gridAddress })

	return { tileOrigin, tileSize }
}

const houndsmorphosisTileSize: {
	({}: { baseSize: Units, addressX: number, addressY: number }): Units,
} = ({ baseSize, addressX, addressY }) => {
	const baseSizeAsNumber = baseSize as any

	return addressY % 2 !== 0 ? addressX as any + baseSizeAsNumber : baseSize as any
}

const houndsmorphosisTileOrigin: {
	({}: {
		tileSize: Units,
		gridAddress: Address,
		baseSize: Units,
		addressX: number,
		addressY: number,
	}): Coordinate,
} = ({ tileSize, gridAddress, baseSize, addressX, addressY }) => {
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
