import { CanvasSize } from '../../../../../src/canvas/types/CanvasSize'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { executeSelectedHoundstoothEffects } from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import { Coordinate } from '../../../../../src/space/types/Coordinate'
import { state } from '../../../../../src/state'
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
					canvasSize: 400 as CanvasSize,
					zoom: 10,
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const negativeXnegativeYquadrantFirstRowTiles = [
			{
				baseId: 0,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 190 as any, 190 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 8,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 170 as any, 180 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 16,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 140 as any, 170 as any ] as Coordinate,
				tileSize: 30 as any,
			},
			{
				baseId: 24,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 100 as any, 160 as any ] as Coordinate,
				tileSize: 40 as any,
			},
		]
		const negativeXnegativeYquadrantSecondRowTiles = [
			{
				baseId: 32,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 190 as any, 180 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 40,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 170 as any, 170 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 48,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 140 as any, 160 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 56,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 100 as any, 150 as any ] as Coordinate,
				tileSize: 10 as any,
			},
		]
		const negativeXnegativeYquadrantThirdRowTiles = [
			{
				baseId: 64,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 180 as any, 160 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 72,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 150 as any, 140 as any ] as Coordinate,
				tileSize: 30 as any,
			},
			{
				baseId: 80,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 110 as any, 120 as any ] as Coordinate,
				tileSize: 40 as any,
			},
			{
				baseId: 88,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 60 as any, 100 as any ] as Coordinate,
				tileSize: 50 as any,
			},
		]
		const negativeXnegativeYquadrantFourthRowTiles = [
			{
				baseId: 96,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 180 as any, 140 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 104,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 150 as any, 120 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 112,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 110 as any, 100 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 120,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 60 as any, 80 as any ] as Coordinate,
				tileSize: 20 as any,
			},
		]

		const positiveXnegativeYquadrantFirstRowTiles = [
			{
				baseId: 128,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 200 as any, 190 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 136,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 210 as any, 180 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 144,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 230 as any, 170 as any ] as Coordinate,
				tileSize: 30 as any,
			},
			{
				baseId: 152,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 260 as any, 160 as any ] as Coordinate,
				tileSize: 40 as any,
			},
		]
		const positiveXnegativeYquadrantSecondRowTiles = [
			{
				baseId: 160,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 200 as any, 180 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 168,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 220 as any, 170 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 176,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 250 as any, 160 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 184,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 290 as any, 150 as any ] as Coordinate,
				tileSize: 10 as any,
			},
		]
		const positiveXnegativeYquadrantThirdRowTiles = [
			{
				baseId: 192,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 200 as any, 160 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 200,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 220 as any, 140 as any ] as Coordinate,
				tileSize: 30 as any,
			},
			{
				baseId: 208,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 250 as any, 120 as any ] as Coordinate,
				tileSize: 40 as any,
			},
			{
				baseId: 216,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 290 as any, 100 as any ] as Coordinate,
				tileSize: 50 as any,
			},
		]
		const positiveXnegativeYquadrantFourthRowTiles = [
			{
				baseId: 224,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 200 as any, 140 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 232,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 230 as any, 120 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 240,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 270 as any, 100 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 248,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 320 as any, 80 as any ] as Coordinate,
				tileSize: 20 as any,
			},
		]

		const negativeXpositiveYquadrantFirstRowTiles = [
			{
				baseId: 256,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 190 as any, 200 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 264,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 170 as any, 200 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 272,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 140 as any, 200 as any ] as Coordinate,
				tileSize: 30 as any,
			},
			{
				baseId: 280,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 100 as any, 200 as any ] as Coordinate,
				tileSize: 40 as any,
			},
		]
		const negativeXpositiveYquadrantSecondRowTiles = [
			{
				baseId: 288,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 190 as any, 210 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 296,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 170 as any, 220 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 304,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 140 as any, 230 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 312,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 100 as any, 240 as any ] as Coordinate,
				tileSize: 10 as any,
			},
		]
		const negativeXpositiveYquadrantThirdRowTiles = [
			{
				baseId: 320,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 180 as any, 220 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 328,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 150 as any, 230 as any ] as Coordinate,
				tileSize: 30 as any,
			},
			{
				baseId: 336,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 110 as any, 240 as any ] as Coordinate,
				tileSize: 40 as any,
			},
			{
				baseId: 344,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 60 as any, 250 as any ] as Coordinate,
				tileSize: 50 as any,
			},
		]
		const negativeXpositiveYquadrantFourthRowTiles = [
			{
				baseId: 352,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 180 as any, 240 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 360,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 150 as any, 260 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 368,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 110 as any, 280 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 376,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 60 as any, 300 as any ] as Coordinate,
				tileSize: 20 as any,
			},
		]

		const positiveXpositiveYquadrantFirstRowTiles = [
			{
				baseId: 384,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 200 as any, 200 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 392,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 210 as any, 200 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 400,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 230 as any, 200 as any ] as Coordinate,
				tileSize: 30 as any,
			},
			{
				baseId: 408,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 260 as any, 200 as any ] as Coordinate,
				tileSize: 40 as any,
			},
		]
		const positiveXpositiveYquadrantSecondRowTiles = [
			{
				baseId: 416,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 200 as any, 210 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 424,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 220 as any, 220 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 432,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 250 as any, 230 as any ] as Coordinate,
				tileSize: 10 as any,
			},
			{
				baseId: 440,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 290 as any, 240 as any ] as Coordinate,
				tileSize: 10 as any,
			},
		]
		const positiveXpositiveYquadrantThirdRowTiles = [
			{
				baseId: 448,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 200 as any, 220 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 456,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 220 as any, 230 as any ] as Coordinate,
				tileSize: 30 as any,
			},
			{
				baseId: 464,
				colors: [ TRANSPARENT, BLACK ],
				tileOrigin: [ 250 as any, 240 as any ] as Coordinate,
				tileSize: 40 as any,
			},
			{
				baseId: 472,
				colors: [ BLACK, TRANSPARENT ],
				tileOrigin: [ 290 as any, 250 as any ] as Coordinate,
				tileSize: 50 as any,
			},
		]
		const positiveXpositiveYquadrantFourthRowTiles = [
			{
				baseId: 480,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 200 as any, 240 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 488,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 230 as any, 260 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 496,
				colors: [ TRANSPARENT, TRANSPARENT ],
				tileOrigin: [ 270 as any, 280 as any ] as Coordinate,
				tileSize: 20 as any,
			},
			{
				baseId: 504,
				colors: [ BLACK, BLACK ],
				tileOrigin: [ 320 as any, 300 as any ] as Coordinate,
				tileSize: 20 as any,
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
