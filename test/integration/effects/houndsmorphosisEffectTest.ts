import executeSelectedHoundstoothEffects from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import standardTileIsColors from '../../../../../test/integration/helpers/standardTileIsColors'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import houndsmorphosisEffect from '../../../effects/houndsmorphosisEffect'
import activateTestMarkerCanvas from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import state from '../../../../../src/state'
import CanvasSize from '../../../../../src/canvas/types/CanvasSize'
import Coordinate from '../../../../../src/space/types/Coordinate'

describe('houndsmorphosis', () => {
	it('lays out the tiles in alternating growing rows and steady rows', () => {
		state.selectedHoundstoothEffects = [ houndsmorphosisEffect ]
		const houndstoothOverrides = {
			basePattern: {
				gridSettings: {
					gridSize: 6,
				},
				viewSettings: {
					zoom: 10,
					canvasSize: 400 as CanvasSize,
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const negativeXnegativeYquadrantFirstRowTiles = [
			{
				baseId: 0,
				tileOrigin: [ 190 as any, 190 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 8,
				tileOrigin: [ 170 as any, 180 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 16,
				tileOrigin: [ 140 as any, 170 as any ] as Coordinate,
				tileSize: 30 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 24,
				tileOrigin: [ 100 as any, 160 as any ] as Coordinate,
				tileSize: 40 as any,
				colors: [ BLACK, BLACK ],
			},
		]
		const negativeXnegativeYquadrantSecondRowTiles = [
			{
				baseId: 32,
				tileOrigin: [ 190 as any, 180 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 40,
				tileOrigin: [ 170 as any, 170 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 48,
				tileOrigin: [ 140 as any, 160 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 56,
				tileOrigin: [ 100 as any, 150 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
		]
		const negativeXnegativeYquadrantThirdRowTiles = [
			{
				baseId: 64,
				tileOrigin: [ 180 as any, 160 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 72,
				tileOrigin: [ 150 as any, 140 as any ] as Coordinate,
				tileSize: 30 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 80,
				tileOrigin: [ 110 as any, 120 as any ] as Coordinate,
				tileSize: 40 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 88,
				tileOrigin: [ 60 as any, 100 as any ] as Coordinate,
				tileSize: 50 as any,
				colors: [ BLACK, BLACK ],
			},
		]
		const negativeXnegativeYquadrantFourthRowTiles = [
			{
				baseId: 96,
				tileOrigin: [ 180 as any, 140 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 104,
				tileOrigin: [ 150 as any, 120 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 112,
				tileOrigin: [ 110 as any, 100 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 120,
				tileOrigin: [ 60 as any, 80 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
		]

		const positiveXnegativeYquadrantFirstRowTiles = [
			{
				baseId: 128,
				tileOrigin: [ 200 as any, 190 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 136,
				tileOrigin: [ 210 as any, 180 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 144,
				tileOrigin: [ 230 as any, 170 as any ] as Coordinate,
				tileSize: 30 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 152,
				tileOrigin: [ 260 as any, 160 as any ] as Coordinate,
				tileSize: 40 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
		]
		const positiveXnegativeYquadrantSecondRowTiles = [
			{
				baseId: 160,
				tileOrigin: [ 200 as any, 180 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 168,
				tileOrigin: [ 220 as any, 170 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 176,
				tileOrigin: [ 250 as any, 160 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 184,
				tileOrigin: [ 290 as any, 150 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
		]
		const positiveXnegativeYquadrantThirdRowTiles = [
			{
				baseId: 192,
				tileOrigin: [ 200 as any, 160 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 200,
				tileOrigin: [ 220 as any, 140 as any ] as Coordinate,
				tileSize: 30 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 208,
				tileOrigin: [ 250 as any, 120 as any ] as Coordinate,
				tileSize: 40 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 216,
				tileOrigin: [ 290 as any, 100 as any ] as Coordinate,
				tileSize: 50 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
		]
		const positiveXnegativeYquadrantFourthRowTiles = [
			{
				baseId: 224,
				tileOrigin: [ 200 as any, 140 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 232,
				tileOrigin: [ 230 as any, 120 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 240,
				tileOrigin: [ 270 as any, 100 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 248,
				tileOrigin: [ 320 as any, 80 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
		]

		const negativeXpositiveYquadrantFirstRowTiles = [
			{
				baseId: 256,
				tileOrigin: [ 190 as any, 200 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 264,
				tileOrigin: [ 170 as any, 200 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 272,
				tileOrigin: [ 140 as any, 200 as any ] as Coordinate,
				tileSize: 30 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 280,
				tileOrigin: [ 100 as any, 200 as any ] as Coordinate,
				tileSize: 40 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
		]
		const negativeXpositiveYquadrantSecondRowTiles = [
			{
				baseId: 288,
				tileOrigin: [ 190 as any, 210 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 296,
				tileOrigin: [ 170 as any, 220 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 304,
				tileOrigin: [ 140 as any, 230 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 312,
				tileOrigin: [ 100 as any, 240 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
		]
		const negativeXpositiveYquadrantThirdRowTiles = [
			{
				baseId: 320,
				tileOrigin: [ 180 as any, 220 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 328,
				tileOrigin: [ 150 as any, 230 as any ] as Coordinate,
				tileSize: 30 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 336,
				tileOrigin: [ 110 as any, 240 as any ] as Coordinate,
				tileSize: 40 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 344,
				tileOrigin: [ 60 as any, 250 as any ] as Coordinate,
				tileSize: 50 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
		]
		const negativeXpositiveYquadrantFourthRowTiles = [
			{
				baseId: 352,
				tileOrigin: [ 180 as any, 240 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 360,
				tileOrigin: [ 150 as any, 260 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 368,
				tileOrigin: [ 110 as any, 280 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 376,
				tileOrigin: [ 60 as any, 300 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
		]

		const positiveXpositiveYquadrantFirstRowTiles = [
			{
				baseId: 384,
				tileOrigin: [ 200 as any, 200 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 392,
				tileOrigin: [ 210 as any, 200 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 400,
				tileOrigin: [ 230 as any, 200 as any ] as Coordinate,
				tileSize: 30 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 408,
				tileOrigin: [ 260 as any, 200 as any ] as Coordinate,
				tileSize: 40 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
		]
		const positiveXpositiveYquadrantSecondRowTiles = [
			{
				baseId: 416,
				tileOrigin: [ 200 as any, 210 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 424,
				tileOrigin: [ 220 as any, 220 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 432,
				tileOrigin: [ 250 as any, 230 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 440,
				tileOrigin: [ 290 as any, 240 as any ] as Coordinate,
				tileSize: 10 as any,
				colors: [ BLACK, BLACK ],
			},
		]
		const positiveXpositiveYquadrantThirdRowTiles = [
			{
				baseId: 448,
				tileOrigin: [ 200 as any, 220 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 456,
				tileOrigin: [ 220 as any, 230 as any ] as Coordinate,
				tileSize: 30 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
			{
				baseId: 464,
				tileOrigin: [ 250 as any, 240 as any ] as Coordinate,
				tileSize: 40 as any,
				colors: [ TRANSPARENT, BLACK ],
			},
			{
				baseId: 472,
				tileOrigin: [ 290 as any, 250 as any ] as Coordinate,
				tileSize: 50 as any,
				colors: [ BLACK, TRANSPARENT ],
			},
		]
		const positiveXpositiveYquadrantFourthRowTiles = [
			{
				baseId: 480,
				tileOrigin: [ 200 as any, 240 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 488,
				tileOrigin: [ 230 as any, 260 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, BLACK ],
			},
			{
				baseId: 496,
				tileOrigin: [ 270 as any, 280 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ TRANSPARENT, TRANSPARENT ],
			},
			{
				baseId: 504,
				tileOrigin: [ 320 as any, 300 as any ] as Coordinate,
				tileSize: 20 as any,
				colors: [ BLACK, BLACK ],
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
