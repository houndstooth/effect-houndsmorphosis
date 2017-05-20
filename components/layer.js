import iterator from '../../shared/utilities/iterator'
import initialSquareType from '../utilities/initialSquareType'
import nextSquareType from '../utilities/nextSquareType'
import houndsmorphosisTile from '../components/houndsmorphosisTile'
import state from '../../state'

export default ({ y, initialSize, layerSquareType, layerSquareSizeBehavior, quarter }) => {
	let growingSize = initialSize + 1
	let x = 0
	let squareType = initialSquareType({ quarter, layerSquareType })

	iterator(state.shared.endIteration).forEach(() => {
		const options = { layerSquareSizeBehavior, growingSize, initialSize, squareType, quarter }
		houndsmorphosisTile({ origin: [x, y], options })

		x += growingSize
		y += initialSize
		growingSize += 1

		squareType = nextSquareType({ squareType, layerSquareType })
	})
}