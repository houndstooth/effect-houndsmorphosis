import iterator from '../../shared/utilities/iterator'
import layer from './layer'
import state from '../../shared/application/state'

export default quarter => {
	let y = 0
	let size = 1

	iterator(state.houndsmorphosis.endIteration).forEach(() => {
		layer({
			y,
			initialSize: size - 1,
			layerSquareType: quarter[ 0 ] === 1 ? 'STRIPED' : 'SOLID',
			layerSquareSizeBehavior: 'GROWING',
			quarter
		})

		y += size

		layer({
			y,
			initialSize: size,
			layerSquareType: quarter[ 0 ] === 1 ? 'SOLID' : 'STRIPED',
			layerSquareSizeBehavior: 'STEADY',
			quarter
		})

		y += size
		size += 1
	})
}