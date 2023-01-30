export function calc(expression: string): number {
	let sep = ',';
	const customSepInit = '//';
	const customSepEnd = '\n';

	if (expression.startsWith(customSepInit)) {
		sep = getSeparator(expression, customSepInit, customSepEnd);
		expression = rmConfigFrom(expression, customSepEnd);
	}
	return expression.split(sep).map(onlyValidChars).map(onlyNumbers).reduce(sum, 0);
}

function onlyValidChars(operand: string) {
	return operand
		.split('')
		.filter((char) => !isNaN(Number(char)))
		.join();
}

function rmConfigFrom(expression: string, customSepEnd: string): string {
	return expression.slice(expression.lastIndexOf(customSepEnd) + 1);
}

function getSeparator(expression: string, customSepInit: string, customSepEnd: string): string {
	return expression.slice(customSepInit.length, expression.lastIndexOf(customSepEnd));
}

function sum(acc: number, cur: number): number {
	return acc + cur;
}

function onlyNumbers(char: string): number {
	const parsed = Number(char);
	return isNaN(parsed) ? 0 : parsed;
}
