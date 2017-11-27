import { constants, Effect, executeSelectedHoundstoothEffects, state, to } from '../../../../../src'
import { activateTestMarkerCanvas, StandardTileExpectation, standardTileIsColors } from '../../../../../test'
import { houndsmorphosisEffect } from '../../../effects'

const { BLACK, TRANSPARENT } = constants

describe('houndsmorphosis', () => {
	it('lays out the tiles in alternating growing rows and steady rows', async (done: DoneFn) => {
		state.selectedHoundstoothEffects = [ houndsmorphosisEffect ]
		const houndstoothOverrides: Effect = {
			basePattern: {
				gridSettings: {
					tileResolution: 6,
				},
				viewSettings: {
					canvasSize: to.Px(400),
					zoom: 10,
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects.default({ houndstoothOverrides })

		setTimeout(() => {
			let baseId: number = -8
			const negativeXnegativeYquadrantFirstRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 190, 190 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 170, 180 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 140, 170 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 100, 160 ]),
					tileSize: to.Unit(40),
				},
			]
			const negativeXnegativeYquadrantSecondRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 190, 180 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 170, 170 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 140, 160 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 100, 150 ]),
					tileSize: to.Unit(10),
				},
			]
			const negativeXnegativeYquadrantThirdRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 180, 160 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 150, 140 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 110, 120 ]),
					tileSize: to.Unit(40),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 60, 100 ]),
					tileSize: to.Unit(50),
				},
			]
			const negativeXnegativeYquadrantFourthRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 180, 140 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 150, 120 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 110, 100 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 60, 80 ]),
					tileSize: to.Unit(20),
				},
			]

			const positiveXnegativeYquadrantFirstRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 200, 190 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 210, 180 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 230, 170 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 260, 160 ]),
					tileSize: to.Unit(40),
				},
			]
			const positiveXnegativeYquadrantSecondRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 200, 180 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 220, 170 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 250, 160 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 290, 150 ]),
					tileSize: to.Unit(10),
				},
			]
			const positiveXnegativeYquadrantThirdRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 200, 160 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 220, 140 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 250, 120 ]),
					tileSize: to.Unit(40),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 290, 100 ]),
					tileSize: to.Unit(50),
				},
			]
			const positiveXnegativeYquadrantFourthRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 200, 140 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 230, 120 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 270, 100 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 320, 80 ]),
					tileSize: to.Unit(20),
				},
			]

			const negativeXpositiveYquadrantFirstRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 190, 200 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 170, 200 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 140, 200 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 100, 200 ]),
					tileSize: to.Unit(40),
				},
			]
			const negativeXpositiveYquadrantSecondRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 190, 210 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 170, 220 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 140, 230 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 100, 240 ]),
					tileSize: to.Unit(10),
				},
			]
			const negativeXpositiveYquadrantThirdRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 180, 220 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 150, 230 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 110, 240 ]),
					tileSize: to.Unit(40),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 60, 250 ]),
					tileSize: to.Unit(50),
				},
			]
			const negativeXpositiveYquadrantFourthRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 180, 240 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 150, 260 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 110, 280 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 60, 300 ]),
					tileSize: to.Unit(20),
				},
			]

			const positiveXpositiveYquadrantFirstRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 200, 200 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 210, 200 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 230, 200 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 260, 200 ]),
					tileSize: to.Unit(40),
				},
			]
			const positiveXpositiveYquadrantSecondRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 200, 210 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 220, 220 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 250, 230 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 290, 240 ]),
					tileSize: to.Unit(10),
				},
			]
			const positiveXpositiveYquadrantThirdRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 200, 220 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 220, 230 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 250, 240 ]),
					tileSize: to.Unit(40),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 290, 250 ]),
					tileSize: to.Unit(50),
				},
			]
			const positiveXpositiveYquadrantFourthRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 200, 240 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 230, 260 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 270, 280 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 320, 300 ]),
					tileSize: to.Unit(20),
				},
			]

			const negativeXnegativeYquadrantTiles: StandardTileExpectation[] = negativeXnegativeYquadrantFirstRowTiles
				.concat(negativeXnegativeYquadrantSecondRowTiles)
				.concat(negativeXnegativeYquadrantThirdRowTiles)
				.concat(negativeXnegativeYquadrantFourthRowTiles)

			const positiveXnegativeYquadrantTiles: StandardTileExpectation[] = positiveXnegativeYquadrantFirstRowTiles
				.concat(positiveXnegativeYquadrantSecondRowTiles)
				.concat(positiveXnegativeYquadrantThirdRowTiles)
				.concat(positiveXnegativeYquadrantFourthRowTiles)

			const negativeXpositiveYquadrantTiles: StandardTileExpectation[] = negativeXpositiveYquadrantFirstRowTiles
				.concat(negativeXpositiveYquadrantSecondRowTiles)
				.concat(negativeXpositiveYquadrantThirdRowTiles)
				.concat(negativeXpositiveYquadrantFourthRowTiles)

			const positiveXpositiveYquadrantTiles: StandardTileExpectation[] = positiveXpositiveYquadrantFirstRowTiles
				.concat(positiveXpositiveYquadrantSecondRowTiles)
				.concat(positiveXpositiveYquadrantThirdRowTiles)
				.concat(positiveXpositiveYquadrantFourthRowTiles)

			const tiles: StandardTileExpectation[] = negativeXnegativeYquadrantTiles
				.concat(positiveXnegativeYquadrantTiles)
				.concat(negativeXpositiveYquadrantTiles)
				.concat(positiveXpositiveYquadrantTiles)

			tiles.forEach((tile: StandardTileExpectation) => expect(standardTileIsColors(tile)).toBe(true))

			done()
		},         0)
	})
})
