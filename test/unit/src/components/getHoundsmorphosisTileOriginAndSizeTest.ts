// tslint:disable:max-line-length
import getHoundsmorphosisTileOriginAndSize from '../../../../src/components/getHoundsmorphosisTileOriginAndSize'
import Address from '../../../../../../src/components/types/Address'

let actual

describe('houndsmorphosis tile origin and size', () => {
	describe('if either x or y are 0', () => {
		it('returns undefineds', () => {
			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 0, 1 ] as Address })).toEqual(undefined)
			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 0 ] as Address })).toEqual(undefined)
			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 0, -1 ] as Address })).toEqual(undefined)
			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 0 ] as Address })).toEqual(undefined)
		})
	})

	describe('when both x and y are positive', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 1 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 1 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 1 ] as Address })
				expect(actual.tileSize).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 1 ] as Address })
				expect(actual.tileSize).toEqual(4 as any)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(6 as any)
			})

			it('is staying stably at 0, vertical position wise', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(0 as any)
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(5 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(9 as any)
			})

			it('is shifting downwards, by 1 each time, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(4 as any)
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 3 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 3 ] as Address })
				expect(actual.tileSize).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 3 ] as Address })
				expect(actual.tileSize).toEqual(4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 3 ] as Address })
				expect(actual.tileSize).toEqual(5 as any)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(5 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(9 as any)
			})

			it('is shifting downwards, by 1 each time, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(5 as any)
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(7 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(12 as any)
			})

			it('is shifting downwards, by 2 each time, starting at 4', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, 4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, 4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(6 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, 4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(8 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, 4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(10 as any)
			})
		})
	})

	describe('when x is negative and y is positive', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 1 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 1 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 1 ] as Address })
				expect(actual.tileSize).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 1 ] as Address })
				expect(actual.tileSize).toEqual(4 as any)
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-6 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-10 as any)
			})

			it('is staying stably at 0, vertical position wise', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(0 as any)
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-6 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-10 as any)
			})

			it('is shifting downwards, by 1 each time, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(4 as any)
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 3 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 3 ] as Address })
				expect(actual.tileSize).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 3 ] as Address })
				expect(actual.tileSize).toEqual(4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 3 ] as Address })
				expect(actual.tileSize).toEqual(5 as any)
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-5 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-9 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-14 as any)
			})

			it('is shifting downwards, by 1 each time, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(5 as any)
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-5 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-9 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-14 as any)
			})

			it('is shifting downwards, by 2 each time, starting at 4', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, 4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, 4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(6 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, 4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(8 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, 4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(10 as any)
			})
		})
	})

	describe('when x is positive and y is negative', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -1 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -1 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -1 ] as Address })
				expect(actual.tileSize).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -1 ] as Address })
				expect(actual.tileSize).toEqual(4 as any)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(6 as any)
			})

			it('is shifting upwards, by 1 each time, starting at -1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-4 as any)
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(5 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(9 as any)
			})

			it('is shifting upwards, by 1 each time, starting at -2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-5 as any)
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -3 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -3 ] as Address })
				expect(actual.tileSize).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -3 ] as Address })
				expect(actual.tileSize).toEqual(4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -3 ] as Address })
				expect(actual.tileSize).toEqual(5 as any)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(5 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(9 as any)
			})

			it('is shifting upwards, by 2 each time, starting at -4', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-6 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-8 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-10 as any)
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(0 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(7 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(12 as any)
			})

			it('is shifting upwards, by 2 each time, starting at -6', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 1, -4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-6 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 2, -4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-8 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 3, -4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-10 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ 4, -4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-12 as any)
			})
		})
	})

	describe('when both x and y are negative', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -1 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -1 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -1 ] as Address })
				expect(actual.tileSize).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -1 ] as Address })
				expect(actual.tileSize).toEqual(4 as any)
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-6 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -1 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-10 as any)
			})

			it('is shifting upwards, by 1 each time, starting at -1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -1 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-4 as any)
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -2 ] as Address })
				expect(actual.tileSize).toEqual(1 as any)
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-1 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-6 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -2 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-10 as any)
			})

			it('is shifting upwards, by 1 each time, starting at -2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -2 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-5 as any)
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -3 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -3 ] as Address })
				expect(actual.tileSize).toEqual(3 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -3 ] as Address })
				expect(actual.tileSize).toEqual(4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -3 ] as Address })
				expect(actual.tileSize).toEqual(5 as any)
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-5 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-9 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -3 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-14 as any)
			})

			it('is shifting upwards, by 2 each time, starting at -4', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-4 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-6 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-8 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -3 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-10 as any)
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -4 ] as Address })
				expect(actual.tileSize).toEqual(2 as any)
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-2 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-5 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-9 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -4 ] as Address })
				expect(actual.tileOrigin[ 0 ]).toEqual(-14 as any)
			})

			it('is shifting upwards, by 2 each time, starting at -6', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -1, -4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-6 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -2, -4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-8 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -3, -4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-10 as any)
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: [ -4, -4 ] as Address })
				expect(actual.tileOrigin[ 1 ]).toEqual(-12 as any)
			})
		})
	})
})
