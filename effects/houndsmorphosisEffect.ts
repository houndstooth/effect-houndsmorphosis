import { AssignmentMode, Effect } from '../../../src'
import * as to from '../../../src/to'
import { getHoundsmorphosisAddressOffset, getHoundsmorphosisTileOriginAndSize } from '../pattern'

const houndsmorphosisEffect: Effect = {
	basePattern: {
		colorSettings: {
			colorAssignmentSettings: {
				assignmentMode: AssignmentMode.Supertile,
				offsetAddress: getHoundsmorphosisAddressOffset,
				supertile: to.Supertile([
					[ [ 0, 0 ], [ 0, 1 ] ],
					[ [ 1, 1 ], [ 1, 0 ] ],
				]),
			},
		},
		gridSettings: {
			includeNegativeQuadrants: true,
			tileResolution: 71,
		},
		tileSettings: {
			getTileOriginAndSize: getHoundsmorphosisTileOriginAndSize,
			tileSize: to.Unit(0),
		},
		viewSettings: {
			centerViewOnCenterOfTileAtHomeAddress: true,
			zoomOnCanvasCenter: true,
		},
	},
	name: 'houndsmorphosis',
}

export { houndsmorphosisEffect }
