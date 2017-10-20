import { AssignmentMode, Effect, Supertile } from '../../../src'
import { getHoundsmorphosisAddressOffset, getHoundsmorphosisTileOriginAndSize } from '../src'

const houndsmorphosisEffect: Effect = {
	basePattern: {
		colorSettings: {
			assignment: {
				assignmentMode: AssignmentMode.SUPERTILE,
				offsetAddress: getHoundsmorphosisAddressOffset,
				supertile: [
					[ [ 0, 0 ], [ 0, 1 ] ],
					[ [ 1, 1 ], [ 1, 0 ] ],
				] as Supertile,
			},
		},
		gridSettings: {
			gridSize: 71,
			includeNegativeQuadrants: true,
		},
		tileSettings: {
			getTileOriginAndSize: getHoundsmorphosisTileOriginAndSize,
			tileSizeSetting: 0 as any,
		},
		viewSettings: {
			centerViewOnCenterOfTileAtHomeAddress: true,
			zoomOnCanvasCenter: true,
		},
	},
	name: 'houndsmorphosis',
}

export { houndsmorphosisEffect }
