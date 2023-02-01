import { getPrimeFactors } from '../core/prime';

describe('prime', () => {
	describe('works for', () => {
		it('number 1', () => {
			expect(getPrimeFactors(1)).toEqual([1]);
		});

		it('a prime number', () => {
			const primes = [2, 3, 5, 7];
			primes.forEach((prime) => {
				expect(getPrimeFactors(prime)).toEqual([prime]);
			});
		});

		it('a multiple of 2', () => {
			expect(getPrimeFactors(4)).toEqual([2, 2]);
			expect(getPrimeFactors(16)).toEqual([2, 2, 2, 2]);
			expect(getPrimeFactors(32)).toEqual([2, 2, 2, 2, 2]);
		});

		it('a multiple of 3', () => {
			expect(getPrimeFactors(9)).toEqual([3, 3]);
			expect(getPrimeFactors(27)).toEqual([3, 3, 3]);
		});

		it('a multiple of 2 and 3', () => {
			expect(getPrimeFactors(6)).toEqual([2, 3]);
			expect(getPrimeFactors(12)).toEqual([2, 2, 3]);
		});

		it('a multiple of 5', () => {
			expect(getPrimeFactors(25)).toEqual([5, 5]);
		});

		it('a complex case', () => {
			expect(getPrimeFactors(1155)).toEqual([3, 5, 7, 11]);
		});
	});
	describe('throws for', () => {
		it('negative numbers', () => {
			expect(() => getPrimeFactors(-1)).toThrow();
		});
	});
});
