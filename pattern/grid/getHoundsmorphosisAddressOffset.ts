import { Address, AddressElement, from, to } from '../../../../src'

const getHoundsmorphosisAddressOffset: (_: { address: Address }) => Address =
	({ address }: { address: Address }): Address => {
		let xOffset: AddressElement = to.AddressElement(0)
		let yOffset: AddressElement = to.AddressElement(0)
		const [ x, y ]: AddressElement[] = address

		if (from.AddressElement(x) < 0) {
			yOffset = to.AddressElement(from.AddressElement(yOffset) + 1)
			xOffset = to.AddressElement(from.AddressElement(xOffset) + 1)
		}

		if (from.AddressElement(y) < 0) {
			xOffset = to.AddressElement(from.AddressElement(xOffset) + 1)
		}

		return to.Address([ xOffset, yOffset ])
	}

export default getHoundsmorphosisAddressOffset
