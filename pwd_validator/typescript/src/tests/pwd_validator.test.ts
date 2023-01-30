import { validate } from '../core/pwd_validator';

describe('pwd_validator ensures the given pwd', () => {
	describe('is accepted when', () => {
		it('all criteria are met', () => {
			expect(validate('Himomimongithub_1')).toBe(true);
		});
	});

	describe('is rejected when it doesnt', () => {
		it('have a length greater than 6', () => {
			expect(validate('Hi_1')).toBe(false);
		});

		it('contain at least one number', () => {
			expect(validate('Himomimon_github')).toBe(false);
		});

		it('contain at least one upper case letter', () => {
			expect(validate('himomimon_github1')).toBe(false);
		});

		it('contain at least one lower case letter', () => {
			expect(validate('HIMOMIMONGITHUB_1')).toBe(false);
		});

		it('contain at least one under_score', () => {
			expect(validate('Himomimongithub1')).toBe(false);
		});
	});
});
