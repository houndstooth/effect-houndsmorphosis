import { BLACK, executeEffect, to, TRANSPARENT } from '../../../../../src/indexForTest'
import { setAppStateForEffectTests, StandardTileExpectation, standardTileIsColors } from '../../../../../test'
import { houndsmorphosisEffect } from '../../../effects'

describe('houndsmorphosis', () => {
	it('lays out the tiles in alternating growing rows and steady rows', async (done: DoneFn) => {
		setAppStateForEffectTests.setAvailableEffects({ houndsmorphosis: houndsmorphosisEffect })
		setAppStateForEffectTests.setSelectedEffects([ 'houndsmorphosis' ])
		setAppStateForEffectTests.setOverrides({
			basePattern: {
				gridSettings: {
					tileResolution: 6,
				},
				viewSettings: {
					zoom: 10,
				},
			},
		})

		executeEffect.default()

		setTimeout(() => {
			let baseId: number = -8
			const negativeXnegativeYquadrantFirstRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 390, 390 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 370, 380 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 340, 370 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 300, 360 ]),
					tileSize: to.Unit(40),
				},
			]
			const negativeXnegativeYquadrantSecondRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 390, 380 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 370, 370 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 340, 360 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 300, 350 ]),
					tileSize: to.Unit(10),
				},
			]
			const negativeXnegativeYquadrantThirdRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 380, 360 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 350, 340 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 310, 320 ]),
					tileSize: to.Unit(40),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 260, 300 ]),
					tileSize: to.Unit(50),
				},
			]
			const negativeXnegativeYquadrantFourthRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 380, 340 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 350, 320 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 310, 300 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 260, 280 ]),
					tileSize: to.Unit(20),
				},
			]

			const positiveXnegativeYquadrantFirstRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 400, 390 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 410, 380 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 430, 370 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 460, 360 ]),
					tileSize: to.Unit(40),
				},
			]
			const positiveXnegativeYquadrantSecondRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 400, 380 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 420, 370 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 450, 360 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 490, 350 ]),
					tileSize: to.Unit(10),
				},
			]
			const positiveXnegativeYquadrantThirdRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 400, 360 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 420, 340 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 450, 320 ]),
					tileSize: to.Unit(40),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 490, 300 ]),
					tileSize: to.Unit(50),
				},
			]
			const positiveXnegativeYquadrantFourthRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 400, 340 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 430, 320 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 470, 300 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 520, 280 ]),
					tileSize: to.Unit(20),
				},
			]

			const negativeXpositiveYquadrantFirstRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 390, 400 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 370, 400 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 340, 400 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 300, 400 ]),
					tileSize: to.Unit(40),
				},
			]
			const negativeXpositiveYquadrantSecondRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 390, 410 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 370, 420 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 340, 430 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 300, 440 ]),
					tileSize: to.Unit(10),
				},
			]
			const negativeXpositiveYquadrantThirdRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 380, 420 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 350, 430 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 310, 440 ]),
					tileSize: to.Unit(40),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 260, 450 ]),
					tileSize: to.Unit(50),
				},
			]
			const negativeXpositiveYquadrantFourthRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 380, 440 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 350, 460 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 310, 480 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 260, 500 ]),
					tileSize: to.Unit(20),
				},
			]

			const positiveXpositiveYquadrantFirstRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 400, 400 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 410, 400 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 430, 400 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 460, 400 ]),
					tileSize: to.Unit(40),
				},
			]
			const positiveXpositiveYquadrantSecondRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 400, 410 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 420, 420 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 450, 430 ]),
					tileSize: to.Unit(10),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 490, 440 ]),
					tileSize: to.Unit(10),
				},
			]
			const positiveXpositiveYquadrantThirdRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 400, 420 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 420, 430 ]),
					tileSize: to.Unit(30),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, BLACK ],
					tileOrigin: to.Coordinate([ 450, 440 ]),
					tileSize: to.Unit(40),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 490, 450 ]),
					tileSize: to.Unit(50),
				},
			]
			const positiveXpositiveYquadrantFourthRowTiles: StandardTileExpectation[] = [
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 400, 440 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 430, 460 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ TRANSPARENT, TRANSPARENT ],
					tileOrigin: to.Coordinate([ 470, 480 ]),
					tileSize: to.Unit(20),
				},
				{
					baseId: baseId += 8,
					colors: [ BLACK, BLACK ],
					tileOrigin: to.Coordinate([ 520, 500 ]),
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
