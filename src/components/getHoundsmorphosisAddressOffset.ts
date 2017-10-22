import { Address, from, to } from '../../../../src'

const getHoundsmorphosisAddressOffset: (_: { gridAddress: Address[] }) => Address[] = ({ gridAddress }) => {
	let xOffset = 0
	let yOffset = 0
	const [ x, y ] = from.Address(gridAddress)

	if (x < 0) {
		yOffset += 1
		xOffset += 1
	}

	if (y < 0) {
		xOffset += 1
	}

	return to.Address([ xOffset, yOffset ])
}

export { getHoundsmorphosisAddressOffset }
