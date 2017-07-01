import getHoundsmorphosisAddressOffset from './getHoundsmorphosisAddressOffset'
import getHoundsmorphosisTileOriginAndSizedUnit from './getHoundsmorphosisTileOriginAndSizedUnit'

export default {
	initial: {
		viewConfig: {
			zoomOnCanvasCenter: true,
			centerViewOnCenterOfTileAtZeroZeroAddress: true
		},
		colorConfig: {
			assignment: {
				mode: 'SUPERTILE',
				supertile: [
					[ [ 0, 0 ], [ 0, 1 ] ],
					[ [ 1, 1 ], [ 1, 0 ] ]
				],
				offsetAddress: getHoundsmorphosisAddressOffset
			}
		},
		getTileOriginAndSizedUnit: getHoundsmorphosisTileOriginAndSizedUnit,
		gridConfig: {
			gridSize: 71,
			includeNegativeQuadrants: true
		}
	}
}
