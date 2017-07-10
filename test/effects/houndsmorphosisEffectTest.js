import execute from '../../../../src/application/execute'
import setup from '../../../../src/application/setup'
import expectStandardTile from '../../../../test/helpers/expectStandardTile'
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
			{ origin: [ 190, 190 ], tileSize: 1, colors: [ TRANSPARENT, TRANSPARENT ] },
			// { origin: [ 170, 180 ], tileSize: 2, colors: [ BLACK, BLACK ] },
			// { origin: [ 140, 170 ], tileSize: 3, colors: [ TRANSPARENT, TRANSPARENT ] },
			// { origin: [ 100, 160 ], tileSize: 4, colors: [BLACK, BLACK] },
		]
		tiles.forEach(tile => {
			expectStandardTile(tile)
		})
	})
})
