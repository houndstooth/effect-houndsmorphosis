import getHoundsmorphosisAddressOffset from '../src/utilities/getHoundsmorphosisAddressOffset'
import getHoundsmorphosisTileOriginAndSize from '../src/utilities/getHoundsmorphosisTileOriginAndSize'

export default {
	name: 'houndsmorphosis',
	basePattern: {
		viewSettings: {
			zoomOnCanvasCenter: true,
			centerViewOnCenterOfTileAtZeroZeroAddress: true,
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
