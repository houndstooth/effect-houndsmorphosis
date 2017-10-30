import { Address, Coordinate, from, TileOriginAndSize, to, Unit } from '../../../../src'
import { isOdd, quarterSquareNumber, trapezoidalNumber } from '../../../../src/utilities/mathUtilities'
import { HoundsmorphosisTileOriginParams } from './types'

const ROW_TYPE_COUNT: number = 2

const getHoundsmorphosisTileOriginAndSize: (_: { gridAddress: Address }) => TileOriginAndSize | undefined =
	({ gridAddress }: { gridAddress: Address }): TileOriginAndSize | undefined => {
		const [ x, y ]: number[] = from.Address(gridAddress)
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
			baseSize,
			gridAddress,
			tileSize,
		})

		return { tileOrigin, tileSize }
	}

const houndsmorphosisTileSize: (_: { absoluteX: number, absoluteY: number, baseSize: Unit }) => Unit =
	({ absoluteX, absoluteY, baseSize }: { absoluteX: number, absoluteY: number, baseSize: Unit }): Unit =>
		to.Unit(isOdd(absoluteY) ? absoluteX + from.Unit(baseSize) : from.Unit(baseSize))

const houndsmorphosisTileOrigin: (_: HoundsmorphosisTileOriginParams) => Coordinate =
	({ absoluteX, absoluteY, baseSize, gridAddress, tileSize }: HoundsmorphosisTileOriginParams): Coordinate => {
		let x: number = trapezoidalNumber({ start: from.Unit(baseSize), height: absoluteX - 1 })
		let y: number = from.Unit(baseSize) * (absoluteX - 1) + quarterSquareNumber(absoluteY)

		const [ addressX, addressY ]: number[] = from.Address(gridAddress)
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
