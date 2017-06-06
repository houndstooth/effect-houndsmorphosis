const CANVAS_SIZE = 1000
import getHoundsmorphosisAddressOffset from './getHoundsmorphosisAddressOffset'
import getHoundsmorphosisShapeOriginAndSizedUnit from './getHoundsmorphosisShapeOriginAndSizedUnit'

export default {
	state: {
		gridSize: 71,
		canvasSize: CANVAS_SIZE,
		houndsmorphosisMode: true,
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
		gridOriginOffset: [ CANVAS_SIZE / 2, CANVAS_SIZE / 2 ],
		getShapeOriginAndSizedUnit: getHoundsmorphosisShapeOriginAndSizedUnit,
		negativeGridToo: true,
		scaleFromCanvasCenter: false
	}
}
