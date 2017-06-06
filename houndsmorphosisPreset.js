const CANVAS_SIZE = 1000
import getHoundsmorphosisAddressOffset from './getHoundsmorphosisAddressOffset'
import getHoundsmorphosisShapeOriginAndSizedUnit from './getHoundsmorphosisShapeOriginAndSizedUnit'

export default {
	state: {
		tileSize: 0, // if you remove this, does not work with cmyktooth anymore
		gridSize: 71,
		canvasSize: CANVAS_SIZE,
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
		centerViewOnCenterOfTileAtZeroZeroAddress: true,
		getShapeOriginAndSizedUnit: getHoundsmorphosisShapeOriginAndSizedUnit,
		negativeGridToo: true,
		scaleFromCanvasCenter: false
	}
}
