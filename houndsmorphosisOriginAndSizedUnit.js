import transpositionUtilities from '../shared/utilities/transpositionUtilities'
import mathUtilities from '../shared/utilities/mathUtilities'
import state from '../shared/state/state'

export default ({ address }) => {
    const addressX = address[ 0 ]
    const addressY = address[ 1 ]
    if (addressX >= 0 && addressY >= 0) {
        const size = Math.ceil(Math.abs(addressY) / 2)
        let sizedUnit = Math.abs(addressY) % 2 === 0 ? Math.abs(addressX) + size + 1 : size
        sizedUnit *= state.unit

        const thing = Math.abs(addressY) % 2 === 0 ? 0 : 0
        let origin = [ 
            thing + mathUtilities.trapezoidalNumber({ start: size, height: Math.abs(addressX) }),
            mathUtilities.quarterSquareNumber(Math.abs(addressY) + 1) + Math.abs(addressX) * size
        ]
        origin = transpositionUtilities.adjustOrigin({ origin })
        
        return { origin, sizedUnit }
    } else if (addressX < 0 && addressY >= 0) {
        const size = Math.ceil(Math.abs(addressY) / 2)
        let sizedUnit = Math.abs(addressY) % 2 === 0 ? Math.abs(addressX) + size : size
        sizedUnit *= state.unit

        const thing = Math.abs(addressY) % 2 === 0 ? 0 : Math.abs(addressX) 
        let origin = [ 
            thing + mathUtilities.trapezoidalNumber({ start: size, height: Math.abs(addressX) }) * -1,
            mathUtilities.quarterSquareNumber(Math.abs(addressY) + 1) + Math.abs(addressX + 1) * size
        ]
        origin = transpositionUtilities.adjustOrigin({ origin })

        return { origin, sizedUnit }
    } else if (addressX >= 0 && addressY < 0) {
        const size = Math.ceil(Math.abs(addressY + 1) / 2)
        let sizedUnit = Math.abs(addressY) % 2 === 0 ? Math.abs(addressX) + size : size
        sizedUnit *= state.unit

        const thing = Math.abs(addressY) % 2 === 0 ? 0 : Math.abs(addressX)
        let origin = [ 
            thing + mathUtilities.trapezoidalNumber({ start: size, height: Math.abs(addressX) }) - Math.abs(addressX),
            (mathUtilities.quarterSquareNumber(Math.abs(addressY)) + Math.abs(addressX) * size) * -1 
        ]
        origin = transpositionUtilities.adjustOrigin({ origin })
        
        return { origin, sizedUnit }
    } else if (addressX < 0 && addressY < 0) {
        const size = Math.ceil(Math.abs(addressY + 1) / 2)
        let sizedUnit = Math.abs(addressY) % 2 === 0 ? Math.abs(addressX) + size - 1 : size
        sizedUnit *= state.unit

        const thing = Math.abs(addressY) % 2 === 0 ? 0 : 0
        let origin = [ 
            thing + (mathUtilities.trapezoidalNumber({ start: size, height: Math.abs(addressX) }) - Math.abs(addressX)) * -1,
            (mathUtilities.quarterSquareNumber(Math.abs(addressY)) + Math.abs(addressX + 1) * size) * -1
        ]
        origin = transpositionUtilities.adjustOrigin({ origin })
        
        return { origin, sizedUnit }
    }
}