import { state, to } from '../../../../../src'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { executeSelectedHoundstoothEffects } from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import { activateTestMarkerCanvas } from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { standardTileIsColors } from '../../../../../test/integration/helpers/standardTileIsColors'
import { houndsmorphosisEffect } from '../../../effects/houndsmorphosisEffect'

describe('houndsmorphosis', () => {
	it('lays out the tiles in alternating growing rows and steady rows', () => {
		state.selectedHoundstoothEffects = [ houndsmorphosisEffect ]
		const houndstoothOverrides = {
			basePattern: {
				gridSettings: {
					gridSize: 6,
				},
				viewSettings: {
					canvasSize: to.Dimension(400),
					zoom: 10,
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		let baseId = -8
		const negativeXnegativeYquadrantFirstRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 190 , 190 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 170 , 180 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 140 , 170 ]),
				tileSize: to.Units(30),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 100 , 160 ]),
				tileSize: to.Units(40),
			},
		]
		const negativeXnegativeYquadrantSecondRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 190 , 180 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 170 , 170 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 140 , 160 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 100 , 150 ]),
				tileSize: to.Units(10),
			},
		]
		const negativeXnegativeYquadrantThirdRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 180 , 160 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 150 , 140 ]),
				tileSize: to.Units(30),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 110 , 120 ]),
				tileSize: to.Units(40),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 60 , 100 ]),
				tileSize: to.Units(50),
			},
		]
		const negativeXnegativeYquadrantFourthRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 180 , 140 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 150 , 120 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 110 , 100 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 60 , 80 ]),
				tileSize: to.Units(20),
			},
		]

		const positiveXnegativeYquadrantFirstRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 200 , 190 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 210 , 180 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 230 , 170 ]),
				tileSize: to.Units(30),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 260 , 160 ]),
				tileSize: to.Units(40),
			},
		]
		const positiveXnegativeYquadrantSecondRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 200 , 180 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 220 , 170 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 250 , 160 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 290 , 150 ]),
				tileSize: to.Units(10),
			},
		]
		const positiveXnegativeYquadrantThirdRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 200 , 160 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 220 , 140 ]),
				tileSize: to.Units(30),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 250 , 120 ]),
				tileSize: to.Units(40),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 290 , 100 ]),
				tileSize: to.Units(50),
			},
		]
		const positiveXnegativeYquadrantFourthRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 200 , 140 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 230 , 120 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 270 , 100 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 320 , 80 ]),
				tileSize: to.Units(20),
			},
		]

		const negativeXpositiveYquadrantFirstRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 190 , 200 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 170 , 200 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 140 , 200 ]),
				tileSize: to.Units(30),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 100 , 200 ]),
				tileSize: to.Units(40),
			},
		]
		const negativeXpositiveYquadrantSecondRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 190 , 210 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 170 , 220 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 140 , 230 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 100 , 240 ]),
				tileSize: to.Units(10),
			},
		]
		const negativeXpositiveYquadrantThirdRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 180 , 220 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 150 , 230 ]),
				tileSize: to.Units(30),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 110 , 240 ]),
				tileSize: to.Units(40),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 60 , 250 ]),
				tileSize: to.Units(50),
			},
		]
		const negativeXpositiveYquadrantFourthRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 180 , 240 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 150 , 260 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 110 , 280 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 60 , 300 ]),
				tileSize: to.Units(20),
			},
		]

		const positiveXpositiveYquadrantFirstRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 200 , 200 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 210 , 200 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 230 , 200 ]),
				tileSize: to.Units(30),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 260 , 200 ]),
				tileSize: to.Units(40),
			},
		]
		const positiveXpositiveYquadrantSecondRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 200 , 210 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 220 , 220 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 250 , 230 ]),
				tileSize: to.Units(10),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 290 , 240 ]),
				tileSize: to.Units(10),
			},
		]
		const positiveXpositiveYquadrantThirdRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 200 , 220 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 220 , 230 ]),
				tileSize: to.Units(30),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: to.Coordinate([ 250 , 240 ]),
				tileSize: to.Units(40),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 290 , 250 ]),
				tileSize: to.Units(50),
			},
		]
		const positiveXpositiveYquadrantFourthRowTiles = [
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 200 , 240 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 230 , 260 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: to.Coordinate([ 270 , 280 ]),
				tileSize: to.Units(20),
			},
			{
				baseId: baseId += 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: to.Coordinate([ 320 , 300 ]),
				tileSize: to.Units(20),
			},
		]

		const negativeXnegativeYquadrantTiles = negativeXnegativeYquadrantFirstRowTiles
			.concat(negativeXnegativeYquadrantSecondRowTiles)
			.concat(negativeXnegativeYquadrantThirdRowTiles)
			.concat(negativeXnegativeYquadrantFourthRowTiles)

		const positiveXnegativeYquadrantTiles = positiveXnegativeYquadrantFirstRowTiles
			.concat(positiveXnegativeYquadrantSecondRowTiles)
			.concat(positiveXnegativeYquadrantThirdRowTiles)
			.concat(positiveXnegativeYquadrantFourthRowTiles)

		const negativeXpositiveYquadrantTiles = negativeXpositiveYquadrantFirstRowTiles
			.concat(negativeXpositiveYquadrantSecondRowTiles)
			.concat(negativeXpositiveYquadrantThirdRowTiles)
			.concat(negativeXpositiveYquadrantFourthRowTiles)

		const positiveXpositiveYquadrantTiles = positiveXpositiveYquadrantFirstRowTiles
			.concat(positiveXpositiveYquadrantSecondRowTiles)
			.concat(positiveXpositiveYquadrantThirdRowTiles)
			.concat(positiveXpositiveYquadrantFourthRowTiles)

		const tiles = negativeXnegativeYquadrantTiles
			.concat(positiveXnegativeYquadrantTiles)
			.concat(negativeXpositiveYquadrantTiles)
			.concat(positiveXpositiveYquadrantTiles)

		tiles.forEach(tile => expect(standardTileIsColors(tile)).toBe(true))
	})
})
