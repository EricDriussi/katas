import { Logger } from './Logger';
import { Transaction } from './Transaction';

export class Printer {
	constructor(private logger: Logger) {}

	private printHeader() {
		const header = 'Date | Amount | Balance';
		this.logger.log(header);
	}

	print(transactions: Transaction[]) {
		this.printHeader();
		this.printStatements(transactions);
	}

	private printStatements(transactions: Transaction[]) {
		this.builLines(transactions)
			.reverse()
			.forEach((line) => this.logger.log(line));
	}

	private builLines(transactions: Transaction[]) {
		let runningBalance = 0;
		return transactions.map((transaction) => {
			runningBalance += transaction.amount;
			return this.formatLine(transaction, runningBalance);
		});
	}

	private formatLine(transaction: Transaction, runningBalance: number) {
		const formattedAmount = transaction.amount.toFixed(2);
		const formattedBalance = runningBalance.toFixed(2);
		return `${transaction.date} | ${formattedAmount} | ${formattedBalance}`;
	}
}
