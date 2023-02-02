import { Account } from '../../core/Account';
import { Transaction } from '../../core/Transaction';
import { TransactionRepository } from '../../core/Repository';
import { Date } from '../../core/Date';
import { Printer } from '../../core/Printer';
import { Logger } from '../../core/Logger';

describe('Account', () => {
	const date = new Date();
	const repo = new TransactionRepository(date);
	const logger = new Logger();
	const printer = new Printer(logger);
	const account = new Account(repo, printer);

	it('stores a deposit through the repository', () => {
		const depositSpy = jest.spyOn(repo, 'makeDeposit');
		account.deposit(100);

		expect(depositSpy).toHaveBeenCalledWith(100);
	});

	it('stores a withdrawal through the repository', () => {
		const withdrawSpy = jest.spyOn(repo, 'makeWithdrawal');
		account.withdraw(100);

		expect(withdrawSpy).toHaveBeenCalledWith(100);
	});

	it('prints a statement through the printer', () => {
		const printSpy = jest.spyOn(printer, 'print');

		const transactions = [new Transaction(date.current(), 10), new Transaction(date.current(), 20)];
		repo.allTransactions = () => transactions;
		account.printStatement();

		expect(printSpy).toHaveBeenCalledWith(transactions);
	});
});
