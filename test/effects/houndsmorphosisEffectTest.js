import execute from '../../../../src/application/execute'
import composeMainHoundstooth from '../../../../src/store/composeMainHoundstooth'
import standardTileIsColors from '../../../../test/integration/helpers/standardTileIsColors'
import { BLACK, TRANSPARENT } from '../../../../src/constants'
import houndsmorphosisEffect from '../../effects/houndsmorphosisEffect'
import activateTestMarkerCanvas from '../../../../test/integration/helpers/activateTestMarkerCanvas'

describe('houndsmorphosis', () => {
	it('lays out the tiles in alternating growing rows and steady rows', () => {
		composeMainHoundstooth({
			houndstoothEffects: [ houndsmorphosisEffect ],
			houndstoothOverrides: {
				basePattern: {
					gridSettings: {
						gridSize: 5,
					},
					viewSettings: {
						zoom: 10,
						canvasSize: 400,
					},
				},
			},
		})
		activateTestMarkerCanvas()

		execute()

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
		const tiles = negativeXnegativeYquadrantFirstRowTiles
			.concat(negativeXnegativeYquadrantSecondRowTiles)
			.concat(negativeXnegativeYquadrantThirdRowTiles)
			.concat(negativeXnegativeYquadrantFourthRowTiles)
		tiles.forEach(tile => expect(standardTileIsColors(tile)).toBe(true))
	})
})
