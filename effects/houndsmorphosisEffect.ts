import { getHoundsmorphosisAddressOffset, getHoundsmorphosisTileOriginAndSize } from '../src'

const houndsmorphosisEffect = {
	name: 'houndsmorphosis',
	basePattern: {
		viewSettings: {
			zoomOnCanvasCenter: true,
			centerViewOnCenterOfTileAtHomeAddress: true,
		},
		tileSettings: {
			tileSizeSetting: 0,
			getTileOriginAndSize: getHoundsmorphosisTileOriginAndSize,
		},
		colorSettings: {
			assignment: {
				assignmentMode: 'SUPERTILE',
				supertile: [
					[ [ 0, 0 ], [ 0, 1 ] ],
					[ [ 1, 1 ], [ 1, 0 ] ],
				],
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
