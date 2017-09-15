import houndsmorphosisSrc from '../src'

export default {
	name: 'houndsmorphosis',
	basePattern: {
		viewSettings: {
			zoomOnCanvasCenter: true,
			centerViewOnCenterOfTileAtHomeAddress: true,
		},
		tileSettings: {
			tileSizeSetting: 0,
			getTileOriginAndSize: houndsmorphosisSrc.getHoundsmorphosisTileOriginAndSize,
		},
		colorSettings: {
			assignment: {
				assignmentMode: 'SUPERTILE',
				supertile: [
					[ [ 0, 0 ], [ 0, 1 ] ],
					[ [ 1, 1 ], [ 1, 0 ] ],
				],
				offsetAddress: houndsmorphosisSrc.getHoundsmorphosisAddressOffset,
			},
		},
		gridSettings: {
			gridSize: 71,
			includeNegativeQuadrants: true,
		},
	},
}
