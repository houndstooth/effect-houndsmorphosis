import { SQUARE_TYPE_TO_COLORS_MAPPING } from '../../shared/constants'
import tile from '../../shared/components/tile'
import adjustOrigin from '../utilities/adjustOrigin'
import state from '../../state'

export default ({ origin: initialOrigin, options }) => {
	const { initialSize, growingSize, squareType, layerSquareSizeBehavior, quarter } = options
	const size = layerSquareSizeBehavior === 'STEADY' ? initialSize : growingSize
	const colorKeys = SQUARE_TYPE_TO_COLORS_MAPPING[ squareType ].slice()
	const colors = [ state.shared[ colorKeys[ 0 ] ], state.shared[ colorKeys[ 1 ] ] ]
	const origin = adjustOrigin({ initialOrigin, quarter, size })
	const scaleFromGridCenter = true

	tile({ origin, size, colors, scaleFromGridCenter })
}