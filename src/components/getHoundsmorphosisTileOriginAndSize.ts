import { trapezoidalNumber, quarterSquareNumber } from '../../../../src/utilities/mathUtilities'
import { TileOriginAndSize, Address, Coordinate, Units } from '../../../../src'

type GetHoundsmorphosisTileOriginAndSize = { ({}: { gridAddress: Address }): TileOriginAndSize }

const getHoundsmorphosisTileOriginAndSize: GetHoundsmorphosisTileOriginAndSize = ({ gridAddress }) => {
	if (gridAddress[ 0 ] === 0 || gridAddress[ 1 ] === 0) {
		return { tileOrigin: undefined, tileSize: undefined }
	}

	const addressX = Math.abs(gridAddress[ 0 ])
	const addressY = Math.abs(gridAddress[ 1 ])

	const baseSize = Math.floor(addressY / 2)

	const tileSize = houndsmorphosisTileSize({ baseSize, addressX, addressY })
	const tileOrigin = houndsmorphosisTileOrigin({ baseSize, addressX, addressY, tileSize, gridAddress })

	return { tileOrigin, tileSize }
}

type HoundsmorphsosisTileSize = { ({}: { baseSize: Units, addressX: number, addressY: number }): Units }

const houndsmorphosisTileSize: HoundsmorphsosisTileSize = ({ baseSize, addressX, addressY }) =>
	addressY % 2 !== 0 ? addressX + baseSize : baseSize

type HoundsmorphosisTileOrigin = {
	({}: {
		tileSize: Units,
		gridAddress: Address,
		baseSize: Units,
		addressX: number,
		addressY: number,
	}): Coordinate,
}

const houndsmorphosisTileOrigin: HoundsmorphosisTileOrigin = params => {
	const { tileSize, gridAddress, baseSize, addressX, addressY } = params
	let x = trapezoidalNumber({ start: baseSize, height: addressX - 1 })
	let y = quarterSquareNumber(addressY) + (addressX - 1) * baseSize

	if (gridAddress[ 0 ] < 0) {
		x *= -1
		x -= tileSize
	}
	if (gridAddress[ 1 ] < 0) {
		y *= -1
		y -= tileSize
	}

	return [ x, y ] as Coordinate
}

export default getHoundsmorphosisTileOriginAndSize
