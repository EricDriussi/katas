# Word Wrap Kata

Write a program that takes two arguments, a string, and a column number and returns the string, with line breaks so that no line is longer than the column number.

## Bonus

Break lines at word boundaries.

## Examples

- wrap("test", 7) => `"test"`
- wrap("hello world", 7) => `"hello\\world"`
- wrap("a lot of words for a single line", 10) => `"a lot of\\words for\\a single\\line"`
- wrap("this is a test", 4) => `"this\\is a\\test"`
- wrap("a longword", 6) => `"a long\\word"`
- wrap("areallylongword", 6) => `"areall\\ylongw\\ord"`
- wrap("greedy whenthewordistoolong", 6) => `"greedy\\whenth\\ewordi\\stoolo\\ng"`
- wrap("greedy whenthewordistoolong", 7) => `"greedy\\whenthe\\wordist\\oolong"` (no trailing space)
