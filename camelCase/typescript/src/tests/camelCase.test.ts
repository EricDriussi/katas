import { camelCase } from '../core/camelCase';

describe('cale case should', () => {
	it('return an empty string if given an empry string as input', () => {
		expect(camelCase('')).toEqual('');
	});

	it('return the input string if already camel cased', () => {
		expect(camelCase('Foo')).toEqual('Foo');
	});

	it('collapse two space separated words with expected case', () => {
		expect(camelCase('Foo Bar')).toEqual('FooBar');
	});

	it('collapse three - or _ separated words with expected case', () => {
		expect(camelCase('Foo_Bar-Foo')).toEqual('FooBarFoo');
	});

	it('capitalize lower case word', () => {
		expect(camelCase('foo')).toEqual('Foo');
	});

	it('collapse three - or _ separated words with incorrect case', () => {
		expect(camelCase('foo_bar foo-bar')).toEqual('FooBarFooBar');
	});
});
