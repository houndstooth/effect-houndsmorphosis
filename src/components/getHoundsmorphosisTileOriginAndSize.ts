import { trapezoidalNumber, quarterSquareNumber } from '../../../../src/utilities/mathUtilities'
import { TileOriginAndSize, Address, Coordinate } from '../../../../src'

type GetHoundsmorphosisTileOriginAndSize = { ({}: { gridAddress: Address }): TileOriginAndSize }

const getHoundsmorphosisTileOriginAndSize: GetHoundsmorphosisTileOriginAndSize = ({ gridAddress }) => {
	if (gridAddress[ 0 ] === 0 || gridAddress[ 1 ] === 0) {
		return { tileOrigin: null, tileSize: null }
	}

	const addressX = Math.abs(gridAddress[ 0 ])
	const addressY = Math.abs(gridAddress[ 1 ])

	const baseSize = Math.floor(addressY / 2)

	const tileSize = houndsmorphosisTileSize({ baseSize, addressX, addressY })
	const tileOrigin = houndsmorphosisTileOrigin({ baseSize, addressX, addressY, tileSize, gridAddress })

	return { tileOrigin, tileSize }
}

type HoundsmorphsosisTileSize = { ({}: { baseSize: number, addressX: number, addressY: number }): number }

const houndsmorphosisTileSize: HoundsmorphsosisTileSize = ({ baseSize, addressX, addressY }) => {
	return addressY % 2 !== 0 ? addressX + baseSize : baseSize
}

type HoundsmorphosisTileOrigin = {
	({}: {
		tileSize: number,
		gridAddress: Address,
		baseSize: number,
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
	return [ x, y ]
}

export default getHoundsmorphosisTileOriginAndSize
