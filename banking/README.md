# Banking Kata

Write a functioning account management system that allows for the following operations:

- deposit
- withdraw
- printStatement

The expected printed output is of the following format:

```
Date        Amount  Balance
24.12.2015   500.00      500.00
23.8.2016    -100.00      400.00
```

More specifically, you should create a class `Account` that offers the above-mentioned methods.
No fewer or more public functions.

## Example

```ts
export class Account {
  deposit(amount): void 
  withdraw(amount): void 
  printStatement(): void 
}
```
