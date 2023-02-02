import { Date } from '../../core/Date';
import { Transaction } from '../../core/Transaction';
import { TransactionRepository } from '../../core/Repository';

describe('The Transaction Repository', () => {
	const today = '25/03/2022';
	const date = new Date();
	date.current = () => today;
	let repository: TransactionRepository;

	beforeEach(() => {
		repository = new TransactionRepository(date);
	});

	it('stores a deposit transaction for a given amount', () => {
		const amount = 100;

		repository.makeDeposit(amount);

		const transactions = repository.allTransactions();
		expect(transactions[0]).toEqual(new Transaction(today, amount));
	});

	it('stores a withdrawal transaction for a given amount', () => {
		const amount = 100;

		repository.makeWithdrawal(amount);

		const transactions = repository.allTransactions();
		expect(transactions[0]).toEqual(new Transaction(today, -amount));
	});
});
