import transpositionUtilities from '../shared/utilities/transpositionUtilities'
import mathUtilities from '../shared/utilities/mathUtilities'

const calculateHoundsmorphosisOrigin = ({ address }) => {
    const addressX = address[ 0 ]
    const addressY = address[ 1 ]
    const size = Math.ceil(addressY / 2)
    let origin = [ 
        mathUtilities.trapezoidalNumber({ start: size, height: addressX }),
        mathUtilities.quarterSquareNumber(addressY + 1) + addressX * size
    ]
    origin = transpositionUtilities.adjustOrigin({ origin })
    return origin
}

const calculateHoundsmorphosisSizedUnit = ({ address }) => {
    const addressX = address[ 0 ]
    const addressY = address[ 1 ]
    const size = Math.ceil(addressY / 2)
    return addressY % 2 === 0 ? addressX + size + 1 : size
}

export default {
    calculateHoundsmorphosisOrigin,
    calculateHoundsmorphosisSizedUnit
}
