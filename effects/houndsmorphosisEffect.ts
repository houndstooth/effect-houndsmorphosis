import { AssignmentMode, NamedEffect, to } from '../../../src'
import { getHoundsmorphosisAddressOffset, getHoundsmorphosisTileOriginAndSize } from '../pattern'

const houndsmorphosisEffect: NamedEffect = {
	basePattern: {
		colorSettings: {
			colorAssignmentSettings: {
				assignmentMode: AssignmentMode.Supertile,
				offsetAddress: getHoundsmorphosisAddressOffset.default,
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
			getTileOriginAndSize: getHoundsmorphosisTileOriginAndSize.default,
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
