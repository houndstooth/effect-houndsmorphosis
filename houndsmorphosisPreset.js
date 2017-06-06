const CANVAS_SIZE = 1000
import getHoundsmorphosisAddressOffset from './getHoundsmorphosisAddressOffset'
import getHoundsmorphosisShapeOriginAndSizedUnit from './getHoundsmorphosisShapeOriginAndSizedUnit'

export default {
	state: {
		tile: {
			tileSize: 0, // if you remove this, does not work with cmyktooth anymore
		},
		view: {
			canvasSize: CANVAS_SIZE,
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
		getShapeOriginAndSizedUnit: getHoundsmorphosisShapeOriginAndSizedUnit,
		grid: {
			gridSize: 71,
			includeNegativeQuadrants: true
		}
	}
}
