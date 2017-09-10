import subject from '../../../src/components/getHoundsmorphosisAddressOffset'

describe('houndsmorphosis address offset deals with set assignment because the axes were eliminated to simplify sizing and positioning but that screws with assignment', () => {
	describe('when both x and y are negative', () => {
		it('provides an offset to cause the address to assign its tile the correct colors, etc', () => {
			expect(subject({ gridAddress: [ -1, -1 ] })).toEqual([ 2, 1 ])
		})
	})

	describe('when x is negative and y is 0 or positive', () => {
		it('provides an offset to cause the address to assign its tile the correct colors, etc', () => {
			expect(subject({ gridAddress: [ -1, 0 ] })).toEqual([ 1, 1 ])
			expect(subject({ gridAddress: [ -1, 1 ] })).toEqual([ 1, 1 ])
		})
	})

	describe('when x is 0 or positive and y is negative', () => {
		it('provides an offset to cause the address to assign its tile the correct colors, etc', () => {
			expect(subject({ gridAddress: [ 0, -1 ] })).toEqual([ 1, 0 ])
			expect(subject({ gridAddress: [ 1, -1 ] })).toEqual([ 1, 0 ])
		})
	})

	describe('when both x and y are 0 or positive', () => {
		it('does not offset', () => {
			expect(subject({ gridAddress: [ 0, 0 ] })).toEqual([ 0, 0 ])
			expect(subject({ gridAddress: [ 1, 0 ] })).toEqual([ 0, 0 ])
			expect(subject({ gridAddress: [ 0, 1 ] })).toEqual([ 0, 0 ])
			expect(subject({ gridAddress: [ 1, 1 ] })).toEqual([ 0, 0 ])
		})
	})
})
