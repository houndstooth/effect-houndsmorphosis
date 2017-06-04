import transpositionUtilities from '../shared/utilities/transpositionUtilities'
import mathUtilities from '../shared/utilities/mathUtilities'
import state from '../shared/state/state'

export default ({ address }) => {
    const addressX = address[ 0 ]
    const addressY = address[ 1 ]
    const size = Math.ceil(addressY / 2)

    let origin = [ 
        mathUtilities.trapezoidalNumber({ start: size, height: addressX }),
        mathUtilities.quarterSquareNumber(addressY + 1) + addressX * size
    ]
    origin = transpositionUtilities.adjustOrigin({ origin })

    let vector = addressY % 2 === 0 ? addressX + size + 1 : size
    const positivityX = addressX < 0 ? -1 : 1
    const positivityY = addressY < 0 ? -1 : 1
    // console.log(positivityX, positivityY)
    vector = [ 
        vector * state.unit * positivityX, 
        vector * state.unit * positivityY 
    ]

    return { origin, vector }
}