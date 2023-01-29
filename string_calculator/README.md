# String Calculator Kata

Write a program that sums the elements of an expression received as string.
The expression will have a comma (`,`) separated list of numbers that should be summed together.
Other characters might be present in the expression and should be discarded.

Finally, the program might receive a custom separator at the beginning of the expression.
This will be delimited by forward slashes as follows: `//@\n2@3` => `5`.
In this case, consider `@` instead of `,` as the separator.

## Bonus

- The function should throw an exception if one or more negatives number are found.
  - List them all in the exception message
- Ignore numbers bigger than `1000`
- Accept delimiters of any length (`//[~~~]\n1~~~2~~~3` => `6`)
- Accept multiple delimiters (`//[_][%]\n1_2%3` => `6`)
- Both of the above rules combined!

## Examples

- "" => 0
- "2" => 2
- "1,2" => 3
- "1,a2" => 3
- "//;\n1;2" => 3
- "//;\n1;a2" => 3
