import { Logger } from '../../core/Logger';
import { Printer } from '../../core/Printer';
import { Transaction } from '../../core/Transaction';

describe('Printer', () => {
	const logger = new Logger();
	const printer = new Printer(logger);
	const loggerSpy = jest.spyOn(logger, 'log');

	it('always prints the header through the console', () => {
		printer.print([]);

		expect(loggerSpy).toHaveBeenCalledWith('Date | Amount | Balance');
	});

	it('prints the statement of a given transaction through the console', () => {
		const transactions = [new Transaction('25/04/1992', 200)];

		printer.print(transactions);

		expect(loggerSpy).toHaveBeenCalledWith('Date | Amount | Balance');
		expect(loggerSpy).toHaveBeenCalledWith('25/04/1992 | 200.00 | 200.00');
	});

	it('prints the statement of multiple given transactions through the console', () => {
		const transactions = [
			new Transaction('25/04/1992', 300),
			new Transaction('25/04/1992', 200),
			new Transaction('25/04/1992', -100),
		];

		printer.print(transactions);

		expect(loggerSpy).toHaveBeenCalledWith('Date | Amount | Balance');
		expect(loggerSpy).toHaveBeenCalledWith('25/04/1992 | -100.00 | 400.00');
		expect(loggerSpy).toHaveBeenCalledWith('25/04/1992 | 200.00 | 500.00');
		expect(loggerSpy).toHaveBeenCalledWith('25/04/1992 | 300.00 | 300.00');
	});
});
