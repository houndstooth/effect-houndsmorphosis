import execute from '../../../../src/application/execute'
import setup from '../../../../src/application/setup'
import standardTileIsColors from '../../../../test/helpers/standardTileIsColors'
import { BLACK, TRANSPARENT } from '../../../../src/constants'
import houndsmorphosisEffect from '../../effects/houndsmorphosisEffect'

describe('houndsmorphosis', () => {
	it('lays out the tiles in alternating growing rows and steady rows', () => {
		setup({
			effects: [ houndsmorphosisEffect ],
			overrides: {
				initial: {
					viewSettings: {
						zoom: 10,
						canvasSize: 400,
					},
				},
			},
		})

		execute()

		const tiles = [
			{ originInPixels: [ 190, 190 ], tileSizeInPixels: 10, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ originInPixels: [ 170, 180 ], tileSizeInPixels: 20, colors: [ BLACK, BLACK ] },
			{ originInPixels: [ 140, 170 ], tileSizeInPixels: 30, colors: [ TRANSPARENT, TRANSPARENT ] },
			{ originInPixels: [ 100, 160 ], tileSizeInPixels: 40, colors: [ BLACK, BLACK ] },
		]
		tiles.forEach(tile => expect(standardTileIsColors(tile)).toBe(true))
	})
})
