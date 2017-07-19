import getHoundsmorphosisAddressOffset from '../src/utilities/getHoundsmorphosisAddressOffset'
import getHoundsmorphosisTileOriginAndSize from '../src/utilities/getHoundsmorphosisTileOriginAndSize'

export default {
	initial: {
		viewSettings: {
			zoomOnCanvasCenter: true,
			centerViewOnCenterOfTileAtZeroZeroAddress: true,
		},
		tileSettings: {
			tileSize: 0,
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
		getTileOriginAndSize: getHoundsmorphosisTileOriginAndSize,
		gridSettings: {
			gridSize: 71,
			includeNegativeQuadrants: true,
		},
	},
}
