import { AssignmentMode, CANVAS_SIZE, from, HALF, NamedEffect, to } from '../../../src'
import { getHoundsmorphosisAddressOffset, getHoundsmorphosisTileOriginAndSize } from '../pattern'

import HOUNDSMORPHOSIS_DESCRIPTION from './houndsmorphosisDescription'

const houndsmorphosisEffect: NamedEffect = {
	basePattern: {
		colorSettings: {
			colorAssignmentSettings: {
				assignmentMode: AssignmentMode.Supertile,
				offsetAddress: getHoundsmorphosisAddressOffset.default,
				supertile: to.Supertile([
					[ [ 0, 0 ], [ 0, 1 ] ],
					[ [ 1, 1 ], [ 1, 0 ] ],
				]),
			},
		},
		gridSettings: {
			includeNegativeQuadrants: true,
			tileResolution: 71,
		},
		tileSettings: {
			getTileOriginAndSize: getHoundsmorphosisTileOriginAndSize.default,
			tileSize: to.Unit(0),
		},
		viewSettings: {
			scroll: [
				to.Px(from.Px(CANVAS_SIZE) * HALF),
				to.Px(from.Px(CANVAS_SIZE) * HALF),
			],
		},
	},
	description: HOUNDSMORPHOSIS_DESCRIPTION,
	name: 'houndsmorphosis',
}

export { houndsmorphosisEffect }
