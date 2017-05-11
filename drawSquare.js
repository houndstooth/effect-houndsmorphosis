import ctx from '../shared/ctx'
import { UNIT } from '../shared/customize'
import drawStripedSquare from './drawStripedSquare'
import drawSolidSquare from '../shared/drawSolidSquare'

export default ({origin, size, squareType, iteration, layer, quarter}) => {

	let hbf //herringbonification factor
	if (quarter[ 0 ] == 1) {
		let ratio = iteration / layer
		if (ratio < 1) ratio = 1
		hbf = 2 * ratio
	} else {
		hbf = 2
	}

	if (squareType == "STRIPED_A") {
		drawStripedSquare({ ctx, origin, sizedUnit: size * UNIT, originColor: "WHITE", hbf })
	} else if (squareType == "STRIPED_B") {
		drawStripedSquare({ ctx, origin, sizedUnit: size * UNIT, originColor: "BLACK", hbf })
	} else {
		ctx.fillStyle = squareType;
		drawSolidSquare({ ctx, origin, size })
	}
}