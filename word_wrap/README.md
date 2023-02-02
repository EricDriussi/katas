# Word Wrap Kata

Write a program that takes two arguments, a string, and a column number and returns the string, with line breaks so that no line is longer than the column number.

## Bonus

Break lines at word boundaries.

## Examples

- wrap("", 3) => `""`
- wrap(null, 3) => `""`
- wrap("", -3) => `throw exception`
- wrap("test", 7) => `"test"`
- wrap("hello world", 7) => `"hello\nworld"`
- wrap("a lot of words for a single line", 10) => `"a lot of\nwords for\na single\nline"`
- wrap("this is a test", 4) => `"this\nis a\ntest"`
- wrap(" himom", 5) => `"\nhimom"`
- wrap("a longword", 6) => `"a long\nword"`
- wrap("areallylongword", 6) => `"areall\nylongw\nord"`
- wrap("greedy whenthewordistoolong", 6) => `"greedy\nwhenth\newordi\nstoolo\nng"`
- wrap("greedy whenthewordistoolong", 7) => `"greedy\nwhenthe\nwordist\noolong"` (no trailing space)
