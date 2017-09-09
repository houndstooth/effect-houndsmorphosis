import executeSelectedHoundstoothEffects from '../../../../src/execute/executeSelectedHoundstoothEffects'
import standardTileIsColors from '../../../../test/integration/helpers/standardTileIsColors'
import { BLACK, TRANSPARENT } from '../../../../src/constants'
import houndsmorphosisEffect from '../../effects/houndsmorphosisEffect'
import activateTestMarkerCanvas from '../../../../test/integration/helpers/activateTestMarkerCanvas'
import store from '../../../../store'

describe('houndsmorphosis', () => {
	it('lays out the tiles in alternating growing rows and steady rows', () => {
		store.selectedHoundstoothEffects = [ houndsmorphosisEffect ]
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
			{ baseId: 0, originInPixels: [ 190, 190 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 8, originInPixels: [ 170, 180 ], tileSizeInPixels: 20, colors: [ BLACK, BLACK ] },
			{ baseId: 16, originInPixels: [ 140, 170 ], tileSizeInPixels: 30, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 24, originInPixels: [ 100, 160 ], tileSizeInPixels: 40, colors: [ BLACK, BLACK ] },
		]
		const negativeXnegativeYquadrantSecondRowTiles = [
			{ baseId: 32, originInPixels: [ 190, 180 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 40, originInPixels: [ 170, 170 ], tileSizeInPixels: 10, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 48, originInPixels: [ 140, 160 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 56, originInPixels: [ 100, 150 ], tileSizeInPixels: 10, colors: [ BLACK, TRANSPARENT ] },
		]
		const negativeXnegativeYquadrantThirdRowTiles = [
			{ baseId: 64, originInPixels: [ 180, 160 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 72, originInPixels: [ 150, 140 ], tileSizeInPixels: 30, colors: [ BLACK, BLACK ] },
			{ baseId: 80, originInPixels: [ 110, 120 ], tileSizeInPixels: 40, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 88, originInPixels: [ 60, 100 ], tileSizeInPixels: 50, colors: [ BLACK, BLACK ] },
		]
		const negativeXnegativeYquadrantFourthRowTiles = [
			{ baseId: 96, originInPixels: [ 180, 140 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 104, originInPixels: [ 150, 120 ], tileSizeInPixels: 20, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 112, originInPixels: [ 110, 100 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 120, originInPixels: [ 60, 80 ], tileSizeInPixels: 20, colors: [ BLACK, TRANSPARENT ] },
		]

		const positiveXnegativeYquadrantFirstRowTiles = [
			{ baseId: 128, originInPixels: [ 200, 190 ], tileSizeInPixels: 10, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 136, originInPixels: [ 210, 180 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 144, originInPixels: [ 230, 170 ], tileSizeInPixels: 30, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 152, originInPixels: [ 260, 160 ], tileSizeInPixels: 40, colors: [ TRANSPARENT, BLACK ] },
		]
		const positiveXnegativeYquadrantSecondRowTiles = [
			{ baseId: 160, originInPixels: [ 200, 180 ], tileSizeInPixels: 10, colors: [ BLACK, BLACK ] },
			{ baseId: 168, originInPixels: [ 220, 170 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 176, originInPixels: [ 250, 160 ], tileSizeInPixels: 10, colors: [ BLACK, BLACK ] },
			{ baseId: 184, originInPixels: [ 290, 150 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
		]
		const positiveXnegativeYquadrantThirdRowTiles = [
			{ baseId: 192, originInPixels: [ 200, 160 ], tileSizeInPixels: 20, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 200, originInPixels: [ 220, 140 ], tileSizeInPixels: 30, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 208, originInPixels: [ 250, 120 ], tileSizeInPixels: 40, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 216, originInPixels: [ 290, 100 ], tileSizeInPixels: 50, colors: [ TRANSPARENT, BLACK ] },
		]
		const positiveXnegativeYquadrantFourthRowTiles = [
			{ baseId: 224, originInPixels: [ 200, 140 ], tileSizeInPixels: 20, colors: [ BLACK, BLACK ] },
			{ baseId: 232, originInPixels: [ 230, 120 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 240, originInPixels: [ 270, 100 ], tileSizeInPixels: 20, colors: [ BLACK, BLACK ] },
			{ baseId: 248, originInPixels: [ 320, 80 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
		]

		const negativeXpositiveYquadrantFirstRowTiles = [
			{ baseId: 256, originInPixels: [ 190, 200 ], tileSizeInPixels: 10, colors: [ BLACK, BLACK ] },
			{ baseId: 264, originInPixels: [ 170, 200 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 272, originInPixels: [ 140, 200 ], tileSizeInPixels: 30, colors: [ BLACK, BLACK ] },
			{ baseId: 280, originInPixels: [ 100, 200 ], tileSizeInPixels: 40, colors: [ TRANSPARENT, TRANSPARENT ] },
		]
		const negativeXpositiveYquadrantSecondRowTiles = [
			{ baseId: 288, originInPixels: [ 190, 210 ], tileSizeInPixels: 10, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 296, originInPixels: [ 170, 220 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 304, originInPixels: [ 140, 230 ], tileSizeInPixels: 10, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 312, originInPixels: [ 100, 240 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, BLACK ] },
		]
		const negativeXpositiveYquadrantThirdRowTiles = [
			{ baseId: 320, originInPixels: [ 180, 220 ], tileSizeInPixels: 20, colors: [ BLACK, BLACK ] },
			{ baseId: 328, originInPixels: [ 150, 230 ], tileSizeInPixels: 30, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 336, originInPixels: [ 110, 240 ], tileSizeInPixels: 40, colors: [ BLACK, BLACK ] },
			{ baseId: 344, originInPixels: [ 60, 250 ], tileSizeInPixels: 50, colors: [ TRANSPARENT, TRANSPARENT ] },
		]
		const negativeXpositiveYquadrantFourthRowTiles = [
			{ baseId: 352, originInPixels: [ 180, 240 ], tileSizeInPixels: 20, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 360, originInPixels: [ 150, 260 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 368, originInPixels: [ 110, 280 ], tileSizeInPixels: 20, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 376, originInPixels: [ 60, 300 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, BLACK ] },
		]

		const positiveXpositiveYquadrantFirstRowTiles = [
			{ baseId: 384, originInPixels: [ 200, 200 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 392, originInPixels: [ 210, 200 ], tileSizeInPixels: 20, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 400, originInPixels: [ 230, 200 ], tileSizeInPixels: 30, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 408, originInPixels: [ 260, 200 ], tileSizeInPixels: 40, colors: [ BLACK, TRANSPARENT ] },
		]
		const positiveXpositiveYquadrantSecondRowTiles = [
			{ baseId: 416, originInPixels: [ 200, 210 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 424, originInPixels: [ 220, 220 ], tileSizeInPixels: 10, colors: [ BLACK, BLACK ] },
			{ baseId: 432, originInPixels: [ 250, 230 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 440, originInPixels: [ 290, 240 ], tileSizeInPixels: 10, colors: [ BLACK, BLACK ] },
		]
		const positiveXpositiveYquadrantThirdRowTiles = [
			{ baseId: 448, originInPixels: [ 200, 220 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 456, originInPixels: [ 220, 230 ], tileSizeInPixels: 30, colors: [ BLACK, TRANSPARENT ] },
			{ baseId: 464, originInPixels: [ 250, 240 ], tileSizeInPixels: 40, colors: [ TRANSPARENT, BLACK ] },
			{ baseId: 472, originInPixels: [ 290, 250 ], tileSizeInPixels: 50, colors: [ BLACK, TRANSPARENT ] },
		]
		const positiveXpositiveYquadrantFourthRowTiles = [
			{ baseId: 480, originInPixels: [ 200, 240 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 488, originInPixels: [ 230, 260 ], tileSizeInPixels: 20, colors: [ BLACK, BLACK ] },
			{ baseId: 496, originInPixels: [ 270, 280 ], tileSizeInPixels: 20, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 504, originInPixels: [ 320, 300 ], tileSizeInPixels: 20, colors: [ BLACK, BLACK ] },
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
