import { calc } from '../core/string_calc';

describe('calc handles', () => {
	it('empty expression', () => {
		expect(calc('')).toBe(0);
	});

	it('single number expression', () => {
		expect(calc('2')).toBe(2);
	});

	it('sum of comma separated numbers', () => {
		expect(calc('1,2')).toBe(3);
		expect(calc('1,2,3')).toBe(6);
	});

	it('invalid characters gracefully', () => {
		expect(calc('a')).toBe(0);
		expect(calc('1,a2')).toBe(3);
		expect(calc('1,a,2')).toBe(3);
		expect(calc('1a,2')).toBe(3);
	});

	it('sum of custom separated numbers', () => {
		expect(calc('//#\n1#2')).toBe(3);
		expect(calc('//#\n1,2,3')).toBe(0);
		expect(calc('//#\n1#2#3')).toBe(6);
	});
});
