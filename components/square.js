import ctx from '../../shared/render/ctx'
import drawStripedSquare from '../render/drawStripedSquare'
import drawSolidSquare from '../../shared/render/drawSolidSquare'
import calculateChevronification from '../utilities/calculateChevronification'

export default ({origin, size, squareType, iteration, layer, quarter}) => {
	const chevronification = calculateChevronification({quarter, iteration, layer})

	if (squareType == "STRIPED_A") {
		drawStripedSquare({ origin, size, originColor: "WHITE", chevronification })
	} else if (squareType == "STRIPED_B") {
		drawStripedSquare({ origin, size, originColor: "BLACK", chevronification })
	} else {
		ctx.fillStyle = squareType;
		drawSolidSquare({ origin, size })
	}
}