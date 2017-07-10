import getHoundsmorphosisAddressOffset from '../src/utilities/getHoundsmorphosisAddressOffset'
import getHoundsmorphosisTileOriginAndSizedUnit from '../src/utilities/getHoundsmorphosisTileOriginAndSizedUnit'

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
				mode: 'SUPERTILE',
				supertile: [
					[ [ 0, 0 ], [ 0, 1 ] ],
					[ [ 1, 1 ], [ 1, 0 ] ],
				],
				offsetAddress: getHoundsmorphosisAddressOffset,
			},
		},
		getTileOriginAndSizedUnit: getHoundsmorphosisTileOriginAndSizedUnit,
		gridSettings: {
			gridSize: 71,
			includeNegativeQuadrants: true,
		},
	},
}
