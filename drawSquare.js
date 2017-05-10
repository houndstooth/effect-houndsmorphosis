import ctx from '../shared/ctx'
import { CENTER } from '../shared/constants'
import { UNIT } from '../shared/customize'
import drawStripedSquare from './drawStripedSquare'
import drawSolidSquare from './drawSolidSquare'

export default (x, y, size, color, iter, layer_index, quarter) => {
	let topLeftX, topLeftY
	if (quarter[ 0 ] == 1) {
		topLeftX = CENTER[ 0 ] + UNIT * x * quarter[ 0 ]
	} else {
		topLeftX = CENTER[ 0 ] + UNIT * (x + size) * quarter[ 0 ]
	}
	if (quarter[ 1 ] == 1) {
		topLeftY = CENTER[ 0 ] + UNIT * y * quarter[ 1 ]
	} else {
		topLeftY = CENTER[ 0 ] + UNIT * (y + size) * quarter[ 1 ]
	}

	let herringbonification_factor
	if (quarter[ 0 ] == 1) {
		let ratio = iter / layer_index
		if (ratio < 1) ratio = 1
		herringbonification_factor = 2 * ratio
	} else {
		herringbonification_factor = 2
	}

	if (color == "striped-c") {
		drawStripedSquare(ctx, topLeftX, topLeftY, size * UNIT, "white", herringbonification_factor)
	} else if (color == "striped-d") {
		drawStripedSquare(ctx, topLeftX, topLeftY, size * UNIT, "black", herringbonification_factor)
	} else {
		drawSolidSquare(ctx, x, y, size, color, quarter);
	}
}