import { SQUARE_TYPE_TO_COLORS_MAPPING } from '../../shared/common/constants'
import tile from '../../shared/components/tile'
import adjustOrigin from '../utilities/adjustOrigin'

export default ({ origin: initialOrigin, options }) => {
	const { initialSize, growingSize, squareType, layerSquareSizeBehavior, quarter } = options
	const size = layerSquareSizeBehavior === 'STEADY' ? initialSize : growingSize
	const colors = SQUARE_TYPE_TO_COLORS_MAPPING[ squareType ]
	const origin = adjustOrigin({ initialOrigin, quarter, size })
	const scaleFromGridCenter = true

	tile({ origin, size, colors, scaleFromGridCenter })
}