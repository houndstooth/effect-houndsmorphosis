import tile from '../../shared/components/tile'
import adjustOrigin from '../utilities/adjustOrigin'
import convertSquareTypeToColors from '../../shared/utilities/convertSquareTypeToColors'

export default ({ origin: initialOrigin, options }) => {
	const { initialSize, growingSize, squareType, layerSquareSizeBehavior, quarter } = options
	const size = layerSquareSizeBehavior === 'STEADY' ? initialSize : growingSize
	const colors = convertSquareTypeToColors({ squareType })
	const origin = adjustOrigin({ initialOrigin, quarter, size })
	const scaleFromGridCenter = true

	tile({ origin, size, colors, scaleFromGridCenter })
}