import ctx from '../shared/ctx'
import { UNIT } from '../shared/customize'
import drawStripedSquare from './drawStripedSquare'
import drawSolidSquare from '../shared/drawSolidSquare'

export default ({origin, size, color, iter, layer, quarter}) => {

	let hbf //herringbonification factor
	if (quarter[ 0 ] == 1) {
		let ratio = iter / layer
		if (ratio < 1) ratio = 1
		hbf = 2 * ratio
	} else {
		hbf = 2
	}

	if (color == "striped-c") {
		drawStripedSquare({ ctx, origin, sizedUnit: size * UNIT, topLeftColor: "white", hbf })
	} else if (color == "striped-d") {
		drawStripedSquare({ ctx, origin, sizedUnit: size * UNIT, topLeftColor: "black", hbf })
	} else {
		ctx.fillStyle = color;
		drawSolidSquare({ ctx, origin, size })
	}
}