import { getHoundsmorphosisAddressOffset, getHoundsmorphosisTileOriginAndSize } from '../src'
import { Houndstooth, Supertile, AssignmentMode } from '../../../src'

const houndsmorphosisEffect: Houndstooth = {
	name: 'houndsmorphosis',
	basePattern: {
		viewSettings: {
			zoomOnCanvasCenter: true,
			centerViewOnCenterOfTileAtHomeAddress: true,
		},
		tileSettings: {
			tileSizeSetting: 0 as any,
			getTileOriginAndSize: getHoundsmorphosisTileOriginAndSize,
		},
		colorSettings: {
			assignment: {
				assignmentMode: AssignmentMode.SUPERTILE,
				supertile: [
					[ [ 0, 0 ], [ 0, 1 ] ],
					[ [ 1, 1 ], [ 1, 0 ] ],
				] as Supertile,
				offsetAddress: getHoundsmorphosisAddressOffset,
			},
		},
		gridSettings: {
			gridSize: 71,
			includeNegativeQuadrants: true,
		},
	},
}

export default houndsmorphosisEffect
