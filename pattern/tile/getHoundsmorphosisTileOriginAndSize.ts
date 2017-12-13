import { Address, Coordinate, from, mathUtilities, TileOriginAndSize, to, Unit } from '../../../../src'
import { HoundsmorphosisTileOriginParams } from './types'

const ROW_TYPE_COUNT: number = 2

const getHoundsmorphosisTileOriginAndSize: (_: { address: Address }) => TileOriginAndSize | undefined =
	({ address }: { address: Address }): TileOriginAndSize | undefined => {
		const [ x, y ]: number[] = from.Address(address)
		if (x === 0 || y === 0) {
			return undefined
		}

		const absoluteX: number = Math.abs(x)
		const absoluteY: number = Math.abs(y)

		const baseSize: Unit = to.Unit(Math.floor(absoluteY / ROW_TYPE_COUNT))

		const tileSize: Unit = houndsmorphosisTileSize({ baseSize, absoluteX, absoluteY })
		const tileOrigin: Coordinate = houndsmorphosisTileOrigin({
			absoluteX,
			absoluteY,
			address,
			baseSize,
			tileSize,
		})

		return { tileOrigin, tileSize }
	}

const houndsmorphosisTileSize: (_: { absoluteX: number, absoluteY: number, baseSize: Unit }) => Unit =
	({ absoluteX, absoluteY, baseSize }: { absoluteX: number, absoluteY: number, baseSize: Unit }): Unit =>
		to.Unit(mathUtilities.isOdd(absoluteY) ? absoluteX + from.Unit(baseSize) : from.Unit(baseSize))

const houndsmorphosisTileOrigin: (_: HoundsmorphosisTileOriginParams) => Coordinate =
	({ absoluteX, absoluteY, baseSize, address, tileSize }: HoundsmorphosisTileOriginParams): Coordinate => {
		let x: number = mathUtilities.trapezoidalNumber({ start: from.Unit(baseSize), height: absoluteX - 1 })
		let y: number = from.Unit(baseSize) * (absoluteX - 1) + mathUtilities.quarterSquareNumber(absoluteY)

		const [ addressX, addressY ]: number[] = from.Address(address)
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

export default getHoundsmorphosisTileOriginAndSize
