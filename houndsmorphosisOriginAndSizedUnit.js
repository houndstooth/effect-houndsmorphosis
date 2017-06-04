import transpositionUtilities from '../shared/utilities/transpositionUtilities'
import mathUtilities from '../shared/utilities/mathUtilities'
import state from '../shared/state/state'

export default ({ address }) => {
    const addressX = address[ 0 ]
    const addressY = address[ 1 ]
    if (addressY < -2 * (addressX + 1)) return { origin: null, sizedUnit: null} 

    const size = Math.ceil(addressY / 2)

    let origin = [ 
        mathUtilities.trapezoidalNumber({ start: size, height: addressX }),
        mathUtilities.quarterSquareNumber(addressY + 1) + addressX * size
    ]
    origin = transpositionUtilities.adjustOrigin({ origin })

    let sizedUnit = addressY % 2 === 0 ? addressX + size + 1 : size
    sizedUnit *= state.unit

    return { origin, sizedUnit }
}