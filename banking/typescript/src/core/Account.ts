import { Printer } from './Printer';
import { TransactionRepository } from './Repository';

export class Account {
	constructor(private repo: TransactionRepository, private printer: Printer) {}
	deposit(amount: number): void {
		this.repo.makeDeposit(amount);
	}
	withdraw(amount: number): void {
		this.repo.makeWithdrawal(amount);
	}
	printStatement(): void {
		this.printer.print(this.repo.allTransactions());
	}
}
