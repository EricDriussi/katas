# Game Of Life Kata

Write a program that can accept an arbitrary grid of cells, and will output a similar grid showing the next generation.

The state of the grid in the next generation will be determined by the three rules of the game:

1. Any live cell with two or three live neighbors survives.
2. Any dead cell with three live neighbors becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

## Examples

Gen 1:

```
........
....*...
...**...
........
```

Gen 2:

```
........
...**...
...**...
........
```
