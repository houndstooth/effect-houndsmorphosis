import ctx from '../shared/ctx'
import { CENTER } from '../shared/constants'
import { UNIT } from '../shared/customize'
import drawStripedSquare from './drawStripedSquare'
import drawSolidSquare from './drawSolidSquare'

export default (x, y, size, color, iter, layer_index, current_coordinate) => {
	let topLeftX, topLeftY
	if (current_coordinate[ 0 ] == 1) {
		topLeftX = CENTER[ 0 ] + UNIT * x * current_coordinate[ 0 ]
	} else {
		topLeftX = CENTER[ 0 ] + UNIT * (x + size) * current_coordinate[ 0 ]
	}
	if (current_coordinate[ 1 ] == 1) {
		topLeftY = CENTER[ 0 ] + UNIT * y * current_coordinate[ 1 ]
	} else {
		topLeftY = CENTER[ 0 ] + UNIT * (y + size) * current_coordinate[ 1 ]
	}

	let herringbonification_factor
	if (current_coordinate[ 0 ] == 1) {
		let ratio = iter / layer_index


		// const thing = (100 / (layer_index - iter + 1))
		if (ratio < 1) ratio = 1
		// if (ratio > 100) ratio = 100
		herringbonification_factor = 2 * ratio
	} else {
		herringbonification_factor = 2
	}
	if (color == "striped-c") {
		//this, and analogous one for the other striped, is how i flip the grain of the houndstooth
		//in the lower half
		//although this leads to an unpleasant abberation along the x-axis in the right half...
		//same problem with rotating the grain 90 degrees, perhaps even worse looking...
		//so let's not do this
		// if (current_coordinate[1] == 1) {
		drawStripedSquare(ctx, topLeftX, topLeftY, size * UNIT, "white", herringbonification_factor)
		// } else {
		//   drawStripedSquareOtherOrientation(topLeftX, topLeftY, size * UNIT, "white")
		// }
	} else if (color == "striped-d") {
		// if (current_coordinate[1] == 1) {
		drawStripedSquare(ctx, topLeftX, topLeftY, size * UNIT, "black", herringbonification_factor)
		// } else {
		//   drawStripedSquareOtherOrientation(topLeftX, topLeftY, size * UNIT, "black")
		// }
	} else {
		drawSolidSquare(ctx, x, y, size, color, current_coordinate);
	}
}