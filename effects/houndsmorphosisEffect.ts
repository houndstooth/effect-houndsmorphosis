import { getHoundsmorphosisAddressOffset, getHoundsmorphosisTileOriginAndSize } from '../src'
import { Houndstooth } from '../../../src'
import Supertile from '../../../src/components/types/Supertile'

const houndsmorphosisEffect: Houndstooth = {
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
				] as Supertile,
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
