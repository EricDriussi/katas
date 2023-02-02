import { wordWrap } from '../core/wrap';

describe('Word wrap', () => {
	describe('wraps text', () => {
		it('with no spaces', () => {
			expect(wordWrap('helloworld', 5)).toBe('hello\nworld');
			expect(wordWrap('areallylongword', 6)).toBe('areall\nylongw\nord');
		});

		it('by spaces when possible', () => {
			expect(wordWrap('hello world', 7)).toBe('hello\nworld');
			expect(wordWrap('abc def ghi', 4)).toBe('abc\ndef\nghi');
			expect(wordWrap(' abcd', 4)).toBe('\nabcd');
		});
	});

	describe('doesnt', () => {
		it('wrap text smaller than column number', () => {
			expect(wordWrap('hithere', 8)).toBe('hithere');
		});

		it('need to wrap empty text', () => {
			expect(wordWrap('', 5)).toBe('');
		});

		it('work with negative column number', () => {
			expect(() => wordWrap('himom', -1)).toThrow('Negative col num is not allowed');
		});
	});
});
