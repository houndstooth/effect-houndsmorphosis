import executeSelectedHoundstoothEffects from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import standardTileIsColors from '../../../../../test/integration/helpers/standardTileIsColors'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import houndsmorphosisEffect from '../../../effects/houndsmorphosisEffect'
import activateTestMarkerCanvas from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import state from '../../../../../src/state'

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
					canvasSize: 400,
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const negativeXnegativeYquadrantFirstRowTiles = [
			{ baseId: 0, tileOrigin: [ 190, 190 ], tileSize: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 8, tileOrigin: [ 170, 180 ], tileSize: 20, colors: [ BLACK, BLACK ] },
			{ baseId: 16, tileOrigin: [ 140, 170 ], tileSize: 30, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 24, tileOrigin: [ 100, 160 ], tileSize: 40, colors: [ BLACK, BLACK ] },
		]
		const negativeXnegativeYquadrantSecondRowTiles = [
			{ baseId: 32, tileOrigin: [ 190, 180 ], tileSize: 10, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 40, tileOrigin: [ 170, 170 ], tileSize: 10, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 48, tileOrigin: [ 140, 160 ], tileSize: 10, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 56, tileOrigin: [ 100, 150 ], tileSize: 10, colors: [ BLACK, TRANSPARENT ] },
		]
		const negativeXnegativeYquadrantThirdRowTiles = [
			{ baseId: 64, tileOrigin: [ 180, 160 ], tileSize: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 72, tileOrigin: [ 150, 140 ], tileSize: 30, colors: [ BLACK, BLACK ] },
			{ baseId: 80, tileOrigin: [ 110, 120 ], tileSize: 40, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 88, tileOrigin: [ 60, 100 ], tileSize: 50, colors: [ BLACK, BLACK ] },
		]
		const negativeXnegativeYquadrantFourthRowTiles = [
			{ baseId: 96, tileOrigin: [ 180, 140 ], tileSize: 20, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 104, tileOrigin: [ 150, 120 ], tileSize: 20, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 112, tileOrigin: [ 110, 100 ], tileSize: 20, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 120, tileOrigin: [ 60, 80 ], tileSize: 20, colors: [ BLACK, TRANSPARENT ] },
		]

		const positiveXnegativeYquadrantFirstRowTiles = [
			{ baseId: 128, tileOrigin: [ 200, 190 ], tileSize: 10, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 136, tileOrigin: [ 210, 180 ], tileSize: 20, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 144, tileOrigin: [ 230, 170 ], tileSize: 30, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 152, tileOrigin: [ 260, 160 ], tileSize: 40, colors: [ TRANSPARENT, BLACK ] },
		]
		const positiveXnegativeYquadrantSecondRowTiles = [
			{ baseId: 160, tileOrigin: [ 200, 180 ], tileSize: 10, colors: [ BLACK, BLACK ] },
			{ baseId: 168, tileOrigin: [ 220, 170 ], tileSize: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 176, tileOrigin: [ 250, 160 ], tileSize: 10, colors: [ BLACK, BLACK ] },
			{ baseId: 184, tileOrigin: [ 290, 150 ], tileSize: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
		]
		const positiveXnegativeYquadrantThirdRowTiles = [
			{ baseId: 192, tileOrigin: [ 200, 160 ], tileSize: 20, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 200, tileOrigin: [ 220, 140 ], tileSize: 30, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 208, tileOrigin: [ 250, 120 ], tileSize: 40, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 216, tileOrigin: [ 290, 100 ], tileSize: 50, colors: [ TRANSPARENT, BLACK ] },
		]
		const positiveXnegativeYquadrantFourthRowTiles = [
			{ baseId: 224, tileOrigin: [ 200, 140 ], tileSize: 20, colors: [ BLACK, BLACK ] },
			{ baseId: 232, tileOrigin: [ 230, 120 ], tileSize: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 240, tileOrigin: [ 270, 100 ], tileSize: 20, colors: [ BLACK, BLACK ] },
			{ baseId: 248, tileOrigin: [ 320, 80 ], tileSize: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
		]

		const negativeXpositiveYquadrantFirstRowTiles = [
			{ baseId: 256, tileOrigin: [ 190, 200 ], tileSize: 10, colors: [ BLACK, BLACK ] },
			{ baseId: 264, tileOrigin: [ 170, 200 ], tileSize: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 272, tileOrigin: [ 140, 200 ], tileSize: 30, colors: [ BLACK, BLACK ] },
			{ baseId: 280, tileOrigin: [ 100, 200 ], tileSize: 40, colors: [ TRANSPARENT, TRANSPARENT ] },
		]
		const negativeXpositiveYquadrantSecondRowTiles = [
			{ baseId: 288, tileOrigin: [ 190, 210 ], tileSize: 10, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 296, tileOrigin: [ 170, 220 ], tileSize: 10, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 304, tileOrigin: [ 140, 230 ], tileSize: 10, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 312, tileOrigin: [ 100, 240 ], tileSize: 10, colors: [ TRANSPARENT, BLACK ] },
		]
		const negativeXpositiveYquadrantThirdRowTiles = [
			{ baseId: 320, tileOrigin: [ 180, 220 ], tileSize: 20, colors: [ BLACK, BLACK ] },
			{ baseId: 328, tileOrigin: [ 150, 230 ], tileSize: 30, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 336, tileOrigin: [ 110, 240 ], tileSize: 40, colors: [ BLACK, BLACK ] },
			{ baseId: 344, tileOrigin: [ 60, 250 ], tileSize: 50, colors: [ TRANSPARENT, TRANSPARENT ] },
		]
		const negativeXpositiveYquadrantFourthRowTiles = [
			{ baseId: 352, tileOrigin: [ 180, 240 ], tileSize: 20, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 360, tileOrigin: [ 150, 260 ], tileSize: 20, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 368, tileOrigin: [ 110, 280 ], tileSize: 20, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 376, tileOrigin: [ 60, 300 ], tileSize: 20, colors: [ TRANSPARENT, BLACK ] },
		]

		const positiveXpositiveYquadrantFirstRowTiles = [
			{ baseId: 384, tileOrigin: [ 200, 200 ], tileSize: 10, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 392, tileOrigin: [ 210, 200 ], tileSize: 20, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 400, tileOrigin: [ 230, 200 ], tileSize: 30, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 408, tileOrigin: [ 260, 200 ], tileSize: 40, colors: [ BLACK, TRANSPARENT ] },
		]
		const positiveXpositiveYquadrantSecondRowTiles = [
			{ baseId: 416, tileOrigin: [ 200, 210 ], tileSize: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 424, tileOrigin: [ 220, 220 ], tileSize: 10, colors: [ BLACK, BLACK ] },
			{ baseId: 432, tileOrigin: [ 250, 230 ], tileSize: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 440, tileOrigin: [ 290, 240 ], tileSize: 10, colors: [ BLACK, BLACK ] },
		]
		const positiveXpositiveYquadrantThirdRowTiles = [
			{ baseId: 448, tileOrigin: [ 200, 220 ], tileSize: 20, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 456, tileOrigin: [ 220, 230 ], tileSize: 30, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 464, tileOrigin: [ 250, 240 ], tileSize: 40, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 472, tileOrigin: [ 290, 250 ], tileSize: 50, colors: [ BLACK, TRANSPARENT ] },
		]
		const positiveXpositiveYquadrantFourthRowTiles = [
			{ baseId: 480, tileOrigin: [ 200, 240 ], tileSize: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 488, tileOrigin: [ 230, 260 ], tileSize: 20, colors: [ BLACK, BLACK ] },
			{ baseId: 496, tileOrigin: [ 270, 280 ], tileSize: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 504, tileOrigin: [ 320, 300 ], tileSize: 20, colors: [ BLACK, BLACK ] },
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
