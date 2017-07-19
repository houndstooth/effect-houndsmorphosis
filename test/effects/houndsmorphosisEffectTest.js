import execute from '../../../../src/application/execute'
import setup from '../../../../src/settings/setup'
import standardTileIsColors from '../../../../test/helpers/standardTileIsColors'
import { BLACK, TRANSPARENT } from '../../../../src/constants'
import houndsmorphosisEffect from '../../effects/houndsmorphosisEffect'
import activateTestMarkerCanvas from '../../../../test/helpers/activateTestMarkerCanvas'

describe('houndsmorphosis', () => {
	it('lays out the tiles in alternating growing rows and steady rows', () => {
		setup({
			effects: [ houndsmorphosisEffect ],
			overrides: {
				initial: {
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

		const tiles = [
			{ baseId: 0, originInPixels: [ 190, 190 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 8, originInPixels: [ 170, 180 ], tileSizeInPixels: 20, colors: [ BLACK, BLACK ] },
			{ baseId: 16, originInPixels: [ 140, 170 ], tileSizeInPixels: 30, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ baseId: 24, originInPixels: [ 100, 160 ], tileSizeInPixels: 40, colors: [ BLACK, BLACK ] },
		]
		tiles.forEach(tile => expect(standardTileIsColors(tile)).toBe(true))
	})
})
