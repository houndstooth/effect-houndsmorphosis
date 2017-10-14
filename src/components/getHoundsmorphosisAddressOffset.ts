import { Address } from '../../../../src'

const getHoundsmorphosisAddressOffset: { ({}: { gridAddress: Address }): Address } = ({ gridAddress }) => {
	let xOffset = 0
	let yOffset = 0

	if (gridAddress[ 0 ] < 0) {
		yOffset += 1
		xOffset += 1
	}

	if (gridAddress[ 1 ] < 0) {
		xOffset += 1
	}

	return [ xOffset, yOffset ] as Address
}

export default getHoundsmorphosisAddressOffset
