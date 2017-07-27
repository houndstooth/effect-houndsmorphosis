import subject from '../../../src/utilities/getHoundsmorphosisTileOriginAndSize'

describe('houndsmorphosis tile origin and size', () => {
	describe('if either x or y are 0', () => {
		it('returns nulls', () => {
			const nulls = { tileOrigin: null, tileSize: null }

			expect(subject({ gridAddress: [ 0, 1 ] })).toEqual(nulls)
			expect(subject({ gridAddress: [ 1, 0 ] })).toEqual(nulls)
			expect(subject({ gridAddress: [ 0, -1 ] })).toEqual(nulls)
			expect(subject({ gridAddress: [ -1, 0 ] })).toEqual(nulls)
		})
	})

	describe('when both x and y are positive', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				expect(subject({ gridAddress: [ 1, 1 ] }).tileSize).toEqual(1)
				expect(subject({ gridAddress: [ 2, 1 ] }).tileSize).toEqual(2)
				expect(subject({ gridAddress: [ 3, 1 ] }).tileSize).toEqual(3)
				expect(subject({ gridAddress: [ 4, 1 ] }).tileSize).toEqual(4)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 1', () => {
				expect(subject({ gridAddress: [ 1, 1 ] }).tileOrigin[0]).toEqual(0)
				expect(subject({ gridAddress: [ 2, 1 ] }).tileOrigin[0]).toEqual(1)
				expect(subject({ gridAddress: [ 3, 1 ] }).tileOrigin[0]).toEqual(3)
				expect(subject({ gridAddress: [ 4, 1 ] }).tileOrigin[0]).toEqual(6)
			})

			it('is staying stably at 0, vertical position wise', () => {
				expect(subject({ gridAddress: [ 1, 1 ] }).tileOrigin[1]).toEqual(0)
				expect(subject({ gridAddress: [ 2, 1 ] }).tileOrigin[1]).toEqual(0)
				expect(subject({ gridAddress: [ 3, 1 ] }).tileOrigin[1]).toEqual(0)
				expect(subject({ gridAddress: [ 4, 1 ] }).tileOrigin[1]).toEqual(0)
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				expect(subject({ gridAddress: [ 1, 2 ] }).tileSize).toEqual(1)
				expect(subject({ gridAddress: [ 2, 2 ] }).tileSize).toEqual(1)
				expect(subject({ gridAddress: [ 3, 2 ] }).tileSize).toEqual(1)
				expect(subject({ gridAddress: [ 4, 2 ] }).tileSize).toEqual(1)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				expect(subject({ gridAddress: [ 1, 2 ] }).tileOrigin[0]).toEqual(0)
				expect(subject({ gridAddress: [ 2, 2 ] }).tileOrigin[0]).toEqual(2)
				expect(subject({ gridAddress: [ 3, 2 ] }).tileOrigin[0]).toEqual(5)
				expect(subject({ gridAddress: [ 4, 2 ] }).tileOrigin[0]).toEqual(9)
			})

			it('is shifting downwards, by 1 each time, starting at 1', () => {
				expect(subject({ gridAddress: [ 1, 2 ] }).tileOrigin[1]).toEqual(1)
				expect(subject({ gridAddress: [ 2, 2 ] }).tileOrigin[1]).toEqual(2)
				expect(subject({ gridAddress: [ 3, 2 ] }).tileOrigin[1]).toEqual(3)
				expect(subject({ gridAddress: [ 4, 2 ] }).tileOrigin[1]).toEqual(4)
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				expect(subject({ gridAddress: [ 1, 3 ] }).tileSize).toEqual(2)
				expect(subject({ gridAddress: [ 2, 3 ] }).tileSize).toEqual(3)
				expect(subject({ gridAddress: [ 3, 3 ] }).tileSize).toEqual(4)
				expect(subject({ gridAddress: [ 4, 3 ] }).tileSize).toEqual(5)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				expect(subject({ gridAddress: [ 1, 3 ] }).tileOrigin[0]).toEqual(0)
				expect(subject({ gridAddress: [ 2, 3 ] }).tileOrigin[0]).toEqual(2)
				expect(subject({ gridAddress: [ 3, 3 ] }).tileOrigin[0]).toEqual(5)
				expect(subject({ gridAddress: [ 4, 3 ] }).tileOrigin[0]).toEqual(9)
			})

			it('is shifting downwards, by 1 each time, starting at 2', () => {
				expect(subject({ gridAddress: [ 1, 3 ] }).tileOrigin[1]).toEqual(2)
				expect(subject({ gridAddress: [ 2, 3 ] }).tileOrigin[1]).toEqual(3)
				expect(subject({ gridAddress: [ 3, 3 ] }).tileOrigin[1]).toEqual(4)
				expect(subject({ gridAddress: [ 4, 3 ] }).tileOrigin[1]).toEqual(5)
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				expect(subject({ gridAddress: [ 1, 4 ] }).tileSize).toEqual(2)
				expect(subject({ gridAddress: [ 2, 4 ] }).tileSize).toEqual(2)
				expect(subject({ gridAddress: [ 3, 4 ] }).tileSize).toEqual(2)
				expect(subject({ gridAddress: [ 4, 4 ] }).tileSize).toEqual(2)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 3', () => {
				expect(subject({ gridAddress: [ 1, 4 ] }).tileOrigin[0]).toEqual(0)
				expect(subject({ gridAddress: [ 2, 4 ] }).tileOrigin[0]).toEqual(3)
				expect(subject({ gridAddress: [ 3, 4 ] }).tileOrigin[0]).toEqual(7)
				expect(subject({ gridAddress: [ 4, 4 ] }).tileOrigin[0]).toEqual(12)
			})

			it('is shifting downwards, by 2 each time, starting at 4', () => {
				expect(subject({ gridAddress: [ 1, 4 ] }).tileOrigin[1]).toEqual(4)
				expect(subject({ gridAddress: [ 2, 4 ] }).tileOrigin[1]).toEqual(6)
				expect(subject({ gridAddress: [ 3, 4 ] }).tileOrigin[1]).toEqual(8)
				expect(subject({ gridAddress: [ 4, 4 ] }).tileOrigin[1]).toEqual(10)
			})
		})
	})
})
