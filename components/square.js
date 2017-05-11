import ctx from '../../shared/render/ctx'
import { UNIT } from '../../shared/common/customize'
import drawStripedSquare from '../render/drawStripedSquare'
import drawSolidSquare from '../../shared/render/drawSolidSquare'
import calculateChevronification from '../utilities/calculateChevronification'

export default ({origin, size, squareType, iteration, layer, quarter}) => {
	const chevronification = calculateChevronification({quarter, iteration, layer})

	if (squareType == "STRIPED_A") {
		drawStripedSquare({ ctx, origin, sizedUnit: size * UNIT, originColor: "WHITE", chevronification })
	} else if (squareType == "STRIPED_B") {
		drawStripedSquare({ ctx, origin, sizedUnit: size * UNIT, originColor: "BLACK", chevronification })
	} else {
		ctx.fillStyle = squareType;
		drawSolidSquare({ ctx, origin, size })
	}
}