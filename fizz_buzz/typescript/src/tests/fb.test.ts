import { fizzBuzz } from '../core/fb';

describe('fb returns', () => {
	it('one as string for number one', () => {
		expect(fizzBuzz(1)).toBe('1');
	});

	it('two as string for number two', () => {
		expect(fizzBuzz(2)).toBe('2');
	});

	it('fizz for number three', () => {
		expect(fizzBuzz(3)).toBe('fizz');
	});

	it('buzz for number five', () => {
		expect(fizzBuzz(5)).toBe('buzz');
	});

	it('fizzbuzz for number 15', () => {
		expect(fizzBuzz(15)).toBe('fizzbuzz');
	});

	it('fizz any multiple of three', () => {
		expect(fizzBuzz(6)).toBe('fizz');
		expect(fizzBuzz(9)).toBe('fizz');
	});

	it('buzz any multiple of five', () => {
		expect(fizzBuzz(10)).toBe('buzz');
		expect(fizzBuzz(20)).toBe('buzz');
	});

	it('fizzbuzz any multiple of 15', () => {
		expect(fizzBuzz(30)).toBe('fizzbuzz');
		expect(fizzBuzz(45)).toBe('fizzbuzz');
	});

	it('given number for aby number not divisible by three, five or 15', () => {
		expect(fizzBuzz(17)).toBe('17');
		expect(fizzBuzz(32)).toBe('32');
	});
});
