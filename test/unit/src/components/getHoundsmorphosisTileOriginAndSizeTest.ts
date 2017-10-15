// tslint:disable:max-line-length
import getHoundsmorphosisTileOriginAndSize from '../../../../src/components/getHoundsmorphosisTileOriginAndSize'
import Address from '../../../../../../src/components/types/Address'

describe('houndsmorphosis tile origin and size', () => {
	describe('if either x or y are 0', () => {
		it('returns undefineds', () => {
			const undefineds = { tileOrigin: undefined, tileSize: undefined }

			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 0, 1 ] as Address })).toEqual(undefineds)
			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 0 ] as Address })).toEqual(undefineds)
			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 0, -1 ] as Address })).toEqual(undefineds)
			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 0 ] as Address })).toEqual(undefineds)
		})
	})

	describe('when both x and y are positive', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 1 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 1 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 1 ] as Address }).tileSize).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 1 ] as Address }).tileSize).toEqual(4)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 1 ] as Address }).tileOrigin[ 0 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 1 ] as Address }).tileOrigin[ 0 ]).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 1 ] as Address }).tileOrigin[ 0 ]).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 1 ] as Address }).tileOrigin[ 0 ]).toEqual(6)
			})

			it('is staying stably at 0, vertical position wise', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 1 ] as Address }).tileOrigin[ 1 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 1 ] as Address }).tileOrigin[ 1 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 1 ] as Address }).tileOrigin[ 1 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 1 ] as Address }).tileOrigin[ 1 ]).toEqual(0)
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 2 ] as Address }).tileSize).toEqual(1)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 2 ] as Address }).tileOrigin[ 0 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 2 ] as Address }).tileOrigin[ 0 ]).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 2 ] as Address }).tileOrigin[ 0 ]).toEqual(5)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 2 ] as Address }).tileOrigin[ 0 ]).toEqual(9)
			})

			it('is shifting downwards, by 1 each time, starting at 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 2 ] as Address }).tileOrigin[ 1 ]).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 2 ] as Address }).tileOrigin[ 1 ]).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 2 ] as Address }).tileOrigin[ 1 ]).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 2 ] as Address }).tileOrigin[ 1 ]).toEqual(4)
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 3 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 3 ] as Address }).tileSize).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 3 ] as Address }).tileSize).toEqual(4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 3 ] as Address }).tileSize).toEqual(5)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 3 ] as Address }).tileOrigin[ 0 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 3 ] as Address }).tileOrigin[ 0 ]).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 3 ] as Address }).tileOrigin[ 0 ]).toEqual(5)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 3 ] as Address }).tileOrigin[ 0 ]).toEqual(9)
			})

			it('is shifting downwards, by 1 each time, starting at 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 3 ] as Address }).tileOrigin[ 1 ]).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 3 ] as Address }).tileOrigin[ 1 ]).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 3 ] as Address }).tileOrigin[ 1 ]).toEqual(4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 3 ] as Address }).tileOrigin[ 1 ]).toEqual(5)
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 4 ] as Address }).tileSize).toEqual(2)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 3', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 4 ] as Address }).tileOrigin[ 0 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 4 ] as Address }).tileOrigin[ 0 ]).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 4 ] as Address }).tileOrigin[ 0 ]).toEqual(7)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 4 ] as Address }).tileOrigin[ 0 ]).toEqual(12)
			})

			it('is shifting downwards, by 2 each time, starting at 4', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 4 ] as Address }).tileOrigin[ 1 ]).toEqual(4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 4 ] as Address }).tileOrigin[ 1 ]).toEqual(6)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 4 ] as Address }).tileOrigin[ 1 ]).toEqual(8)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 4 ] as Address }).tileOrigin[ 1 ]).toEqual(10)
			})
		})
	})

	describe('when x is negative and y is positive', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 1 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 1 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 1 ] as Address }).tileSize).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 1 ] as Address }).tileSize).toEqual(4)
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 1 ] as Address }).tileOrigin[ 0 ]).toEqual(-1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 1 ] as Address }).tileOrigin[ 0 ]).toEqual(-3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 1 ] as Address }).tileOrigin[ 0 ]).toEqual(-6)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 1 ] as Address }).tileOrigin[ 0 ]).toEqual(-10)
			})

			it('is staying stably at 0, vertical position wise', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 1 ] as Address }).tileOrigin[ 1 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 1 ] as Address }).tileOrigin[ 1 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 1 ] as Address }).tileOrigin[ 1 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 1 ] as Address }).tileOrigin[ 1 ]).toEqual(0)
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 2 ] as Address }).tileSize).toEqual(1)
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 2 ] as Address }).tileOrigin[ 0 ]).toEqual(-1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 2 ] as Address }).tileOrigin[ 0 ]).toEqual(-3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 2 ] as Address }).tileOrigin[ 0 ]).toEqual(-6)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 2 ] as Address }).tileOrigin[ 0 ]).toEqual(-10)
			})

			it('is shifting downwards, by 1 each time, starting at 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 2 ] as Address }).tileOrigin[ 1 ]).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 2 ] as Address }).tileOrigin[ 1 ]).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 2 ] as Address }).tileOrigin[ 1 ]).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 2 ] as Address }).tileOrigin[ 1 ]).toEqual(4)
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 3 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 3 ] as Address }).tileSize).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 3 ] as Address }).tileSize).toEqual(4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 3 ] as Address }).tileSize).toEqual(5)
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 3 ] as Address }).tileOrigin[ 0 ]).toEqual(-2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 3 ] as Address }).tileOrigin[ 0 ]).toEqual(-5)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 3 ] as Address }).tileOrigin[ 0 ]).toEqual(-9)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 3 ] as Address }).tileOrigin[ 0 ]).toEqual(-14)
			})

			it('is shifting downwards, by 1 each time, starting at 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 3 ] as Address }).tileOrigin[ 1 ]).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 3 ] as Address }).tileOrigin[ 1 ]).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 3 ] as Address }).tileOrigin[ 1 ]).toEqual(4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 3 ] as Address }).tileOrigin[ 1 ]).toEqual(5)
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 4 ] as Address }).tileSize).toEqual(2)
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 4 ] as Address }).tileOrigin[ 0 ]).toEqual(-2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 4 ] as Address }).tileOrigin[ 0 ]).toEqual(-5)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 4 ] as Address }).tileOrigin[ 0 ]).toEqual(-9)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 4 ] as Address }).tileOrigin[ 0 ]).toEqual(-14)
			})

			it('is shifting downwards, by 2 each time, starting at 4', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 4 ] as Address }).tileOrigin[ 1 ]).toEqual(4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 4 ] as Address }).tileOrigin[ 1 ]).toEqual(6)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 4 ] as Address }).tileOrigin[ 1 ]).toEqual(8)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 4 ] as Address }).tileOrigin[ 1 ]).toEqual(10)
			})
		})
	})

	describe('when x is positive and y is negative', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -1 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -1 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -1 ] as Address }).tileSize).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -1 ] as Address }).tileSize).toEqual(4)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -1 ] as Address }).tileOrigin[ 0 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -1 ] as Address }).tileOrigin[ 0 ]).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -1 ] as Address }).tileOrigin[ 0 ]).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -1 ] as Address }).tileOrigin[ 0 ]).toEqual(6)
			})

			it('is shifting upwards, by 1 each time, starting at -1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -1 ] as Address }).tileOrigin[ 1 ]).toEqual(-1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -1 ] as Address }).tileOrigin[ 1 ]).toEqual(-2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -1 ] as Address }).tileOrigin[ 1 ]).toEqual(-3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -1 ] as Address }).tileOrigin[ 1 ]).toEqual(-4)
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -2 ] as Address }).tileSize).toEqual(1)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -2 ] as Address }).tileOrigin[ 0 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -2 ] as Address }).tileOrigin[ 0 ]).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -2 ] as Address }).tileOrigin[ 0 ]).toEqual(5)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -2 ] as Address }).tileOrigin[ 0 ]).toEqual(9)
			})

			it('is shifting upwards, by 1 each time, starting at -2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -2 ] as Address }).tileOrigin[ 1 ]).toEqual(-2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -2 ] as Address }).tileOrigin[ 1 ]).toEqual(-3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -2 ] as Address }).tileOrigin[ 1 ]).toEqual(-4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -2 ] as Address }).tileOrigin[ 1 ]).toEqual(-5)
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -3 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -3 ] as Address }).tileSize).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -3 ] as Address }).tileSize).toEqual(4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -3 ] as Address }).tileSize).toEqual(5)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -3 ] as Address }).tileOrigin[ 0 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -3 ] as Address }).tileOrigin[ 0 ]).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -3 ] as Address }).tileOrigin[ 0 ]).toEqual(5)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -3 ] as Address }).tileOrigin[ 0 ]).toEqual(9)
			})

			it('is shifting upwards, by 2 each time, starting at -4', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -3 ] as Address }).tileOrigin[ 1 ]).toEqual(-4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -3 ] as Address }).tileOrigin[ 1 ]).toEqual(-6)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -3 ] as Address }).tileOrigin[ 1 ]).toEqual(-8)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -3 ] as Address }).tileOrigin[ 1 ]).toEqual(-10)
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -4 ] as Address }).tileSize).toEqual(2)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 3', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -4 ] as Address }).tileOrigin[ 0 ]).toEqual(0)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -4 ] as Address }).tileOrigin[ 0 ]).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -4 ] as Address }).tileOrigin[ 0 ]).toEqual(7)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -4 ] as Address }).tileOrigin[ 0 ]).toEqual(12)
			})

			it('is shifting upwards, by 2 each time, starting at -6', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -4 ] as Address }).tileOrigin[ 1 ]).toEqual(-6)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -4 ] as Address }).tileOrigin[ 1 ]).toEqual(-8)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -4 ] as Address }).tileOrigin[ 1 ]).toEqual(-10)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -4 ] as Address }).tileOrigin[ 1 ]).toEqual(-12)
			})
		})
	})

	describe('when both x and y are negative', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -1 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -1 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -1 ] as Address }).tileSize).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -1 ] as Address }).tileSize).toEqual(4)
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -1 ] as Address }).tileOrigin[ 0 ]).toEqual(-1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -1 ] as Address }).tileOrigin[ 0 ]).toEqual(-3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -1 ] as Address }).tileOrigin[ 0 ]).toEqual(-6)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -1 ] as Address }).tileOrigin[ 0 ]).toEqual(-10)
			})

			it('is shifting upwards, by 1 each time, starting at -1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -1 ] as Address }).tileOrigin[ 1 ]).toEqual(-1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -1 ] as Address }).tileOrigin[ 1 ]).toEqual(-2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -1 ] as Address }).tileOrigin[ 1 ]).toEqual(-3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -1 ] as Address }).tileOrigin[ 1 ]).toEqual(-4)
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -2 ] as Address }).tileSize).toEqual(1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -2 ] as Address }).tileSize).toEqual(1)
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -2 ] as Address }).tileOrigin[ 0 ]).toEqual(-1)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -2 ] as Address }).tileOrigin[ 0 ]).toEqual(-3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -2 ] as Address }).tileOrigin[ 0 ]).toEqual(-6)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -2 ] as Address }).tileOrigin[ 0 ]).toEqual(-10)
			})

			it('is shifting upwards, by 1 each time, starting at -2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -2 ] as Address }).tileOrigin[ 1 ]).toEqual(-2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -2 ] as Address }).tileOrigin[ 1 ]).toEqual(-3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -2 ] as Address }).tileOrigin[ 1 ]).toEqual(-4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -2 ] as Address }).tileOrigin[ 1 ]).toEqual(-5)
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -3 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -3 ] as Address }).tileSize).toEqual(3)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -3 ] as Address }).tileSize).toEqual(4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -3 ] as Address }).tileSize).toEqual(5)
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -3 ] as Address }).tileOrigin[ 0 ]).toEqual(-2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -3 ] as Address }).tileOrigin[ 0 ]).toEqual(-5)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -3 ] as Address }).tileOrigin[ 0 ]).toEqual(-9)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -3 ] as Address }).tileOrigin[ 0 ]).toEqual(-14)
			})

			it('is shifting upwards, by 2 each time, starting at -4', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -3 ] as Address }).tileOrigin[ 1 ]).toEqual(-4)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -3 ] as Address }).tileOrigin[ 1 ]).toEqual(-6)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -3 ] as Address }).tileOrigin[ 1 ]).toEqual(-8)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -3 ] as Address }).tileOrigin[ 1 ]).toEqual(-10)
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -4 ] as Address }).tileSize).toEqual(2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -4 ] as Address }).tileSize).toEqual(2)
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -4 ] as Address }).tileOrigin[ 0 ]).toEqual(-2)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -4 ] as Address }).tileOrigin[ 0 ]).toEqual(-5)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -4 ] as Address }).tileOrigin[ 0 ]).toEqual(-9)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -4 ] as Address }).tileOrigin[ 0 ]).toEqual(-14)
			})

			it('is shifting upwards, by 2 each time, starting at -6', () => {
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -4 ] as Address }).tileOrigin[ 1 ]).toEqual(-6)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -4 ] as Address }).tileOrigin[ 1 ]).toEqual(-8)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -4 ] as Address }).tileOrigin[ 1 ]).toEqual(-10)
				expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -4 ] as Address }).tileOrigin[ 1 ]).toEqual(-12)
			})
		})
	})
})
