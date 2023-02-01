export function getPrimeFactors(number: number): number[] {
	if (number < 1) throw new Error('Must be positive!');
	return primeFactors(number);
}

function primeFactors(number: number): number[] {
	const prime = smallestPrime(number);
	const remainder = number / prime;
	if (remainder <= 1) {
		return [prime];
	}
	return [prime].concat(getPrimeFactors(remainder));
}

function smallestPrime(number: number): number {
	if (number == 1) return 1;
	let factor = 2;
	while (number % factor != 0) {
		++factor;
	}
	return factor;
}
