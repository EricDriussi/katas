# Password Validator Kata

Write a program that validates passwords.
It should receive a string and return whether it is a valid password or not.
Rules for a valid password:

1. There needs to be at least 1 uppercase letter.
2. There needs to be at least 1 lowercase letter.
3. There needs to be at least 1 number.
4. The password needs to be at least 8 characters long.

## Bonus

There should also be a '*special character*'.

## Examples

- `"Abcd1234"` => true
- `"Abcd123"` => false
- `"abcd1234"` => false
- `"AbcdefGhijKlmnopQRsTuvwxyZ1234567890"` => true
- `"ABCD1234"` => false
- `"Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"` => true
- `"!@#$%^&*()-_+={}[]|\:;?/>.<,"` => false
