import ctx from '../shared/ctx'
import { CENTER } from '../shared/constants'
import { UNIT } from '../shared/customize'
import drawStripedSquare from './drawStripedSquare'
import drawSolidSquare from './drawSolidSquare'

export default (x, y, size, color, iter, layer, quarter) => {
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

	let hbf //herringbonification factor
	if (quarter[ 0 ] == 1) {
		let ratio = iter / layer
		if (ratio < 1) ratio = 1
		hbf = 2 * ratio
	} else {
		hbf = 2
	}

	if (color == "striped-c") {
		drawStripedSquare({ctx, topLeftX, topLeftY, sizedUnit: size * UNIT, topLeftColor: "white", hbf})
	} else if (color == "striped-d") {
		drawStripedSquare({ctx, topLeftX, topLeftY, sizedUnit: size * UNIT, topLeftColor: "black", hbf})
	} else {
		drawSolidSquare({ctx, x, y, size, color, quarter});
	}
}