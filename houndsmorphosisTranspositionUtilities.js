import transpositionUtilities from '../shared/utilities/transpositionUtilities'
import triangularNumbers from '../harmonitooth/triangularNumbers'

const quarterSquareNumber = n => Math.floor(Math.pow(n, 2) / 4)

const trapezoidalNumber = ({ start, height }) => {
    const { triangularNumber } = triangularNumbers
    return triangularNumber(start + height) - triangularNumber(start)
} 

const calculateHoundsmorphosisOrigin = ({ address }) => {
    const addressX = address[ 0 ]
    const addressY = address[ 1 ]
    const size = Math.ceil(addressY / 2)
    let origin = [ 
        trapezoidalNumber({ start: size, height: addressX }),
        quarterSquareNumber(addressY + 1) + addressX * size
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
