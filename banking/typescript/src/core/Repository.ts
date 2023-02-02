import { Date } from './Date';
import { Transaction } from './Transaction';

export class TransactionRepository {
	transactions: Transaction[] = [];
	constructor(private date: Date) {}
	makeDeposit(amount: number) {
		const transaction = new Transaction(this.date.current(), amount);
		this.transactions.push(transaction);
	}
	makeWithdrawal(amount: number) {
		const transaction = new Transaction(this.date.current(), -amount);
		this.transactions.push(transaction);
	}
	allTransactions(): Transaction[] {
		return this.transactions;
	}
}
