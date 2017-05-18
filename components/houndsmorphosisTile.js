import { SQUARE_TYPE_TO_COLORS_MAPPING } from '../../shared/common/constants'
import tile from '../../shared/components/tile'
import adjustOrigin from '../utilities/adjustOrigin'

export default ({ x: initialX, y: initialY, options }) => {
	const { initialSize, growingSize, squareType, layerSquareSizeBehavior, quarter } = options
	const size = layerSquareSizeBehavior === 'STEADY' ? initialSize : growingSize
	const { originColor, otherColor } = SQUARE_TYPE_TO_COLORS_MAPPING[ squareType ]
	const origin = adjustOrigin({ origin: [ initialX, initialY ], quarter, size })
	const x = origin[ 0 ]
	const y = origin[ 1 ]
	const scaleFromGridCenter = true

	tile({ x, y, size, originColor, otherColor, scaleFromGridCenter })
}