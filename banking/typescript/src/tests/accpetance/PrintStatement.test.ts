import { Account } from '../../core/Account';
import { Logger } from '../../core/Logger';
import { Printer } from '../../core/Printer';
import { Date } from '../../core/Date';
import { TransactionRepository } from '../../core/Repository';

describe('Printer prints', () => {
	const logger = new Logger();
	const loggerSpy = jest.spyOn(logger, 'log');
	const date = new Date();
	date.current = jest
		.fn()
		.mockReturnValueOnce('12/01/2023')
		.mockReturnValueOnce('15/01/2023')
		.mockReturnValueOnce('16/01/2023');

	const repo = new TransactionRepository(date);
	const printer = new Printer(logger);
	const account = new Account(repo, printer);

	it('an account statement including the transactions made to stdout', () => {
		account.deposit(1000);
		account.withdraw(500);
		account.deposit(2000);

		account.printStatement();

		expect(loggerSpy).toHaveBeenCalledWith('Date | Amount | Balance');
		expect(loggerSpy).toHaveBeenCalledWith('16/01/2023 | 2000.00 | 2500.00');
		expect(loggerSpy).toHaveBeenCalledWith('15/01/2023 | -500.00 | 500.00');
		expect(loggerSpy).toHaveBeenCalledWith('12/01/2023 | 1000.00 | 1000.00');
	});
});
