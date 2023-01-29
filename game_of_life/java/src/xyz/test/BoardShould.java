package xyz.test;

import org.junit.jupiter.api.Test;
import xyz.main.Board;
import xyz.main.Cell;

import java.util.ArrayList;
import java.util.Random;

import static org.junit.jupiter.api.Assertions.*;

class BoardShould {

    @Test
    void containCells() {
        //GIVEN
        Board myBoard = new Board();
        for (Object[] cellRow : myBoard.getCells()) {
            for (Object cell : cellRow) {
                //THEN
                assertNotNull(cell);
                assertSame(cell.getClass(), Cell.class);
            }
        }
    }

    @Test
    void containBothLivingAndDeadCellsAtStart() {
        //GIVEN
        Board myBoard = new Board();
        int countAlive = 0;
        int countDead = 0;
        for (Cell[] cellRow : myBoard.getCells()) {
            for (Cell cell : cellRow) {
                if (cell.isAlive()) countAlive++;
                else countDead++;
            }
        }

        //THEN
        assertTrue((countAlive > 0));
        assertTrue((countDead > 0));
    }

    @Test
    void getTheNumberOfNeighboursOfGivenCellIfOnBorder() {
        //GIVEN
        Board myBoard = new Board(cellsCreator(10, 3));

        //WHEN
        ArrayList<Cell> neighbours = myBoard.getNeighbouringCells(0, 1);

        //THEN
        assertEquals(5, neighbours.size());
    }

    @Test
    void getTheNumberOfNeighboursOfGivenCellIfCornered() {
        //GIVEN
        Board myBoard = new Board(cellsCreator(8, 3));

        //WHEN
        ArrayList<Cell> neighbours = myBoard.getNeighbouringCells(0, 0);

        //THEN
        assertEquals(3, neighbours.size());
    }

    @Test
    void getTheNumberOfNeighboursOfGivenCellIfCentered() {
        //GIVEN
        Board myBoard = new Board(cellsCreator(5, 3));

        //WHEN
        ArrayList<Cell> neighbours = myBoard.getNeighbouringCells(1, 1);

        //THEN
        assertEquals(8, neighbours.size());
    }

    @Test
    void getTheNumberOfLivingNeighboursOfGivenCell() {
        //GIVEN
        int size = 3;
        int neighboursToSpawnAlive = new Random().nextInt(size * size);
        Board myBoard = new Board(cellsCreator(size, neighboursToSpawnAlive));
        Cell mainCell = myBoard.getCells()[1][1];

        //WHEN
        ArrayList<Cell> neighbours = myBoard.getNeighbouringCells(1, 1);
        Integer numberOfLivingCellsNeighbouringMainCell = neighbours.stream()
                .reduce(
                        0,
                        (livingTotal, cell)
                                -> (cell.isAlive()) ?
                                livingTotal + 1 :
                                livingTotal,
                        Integer::sum
                );
        if (mainCell.isAlive()) numberOfLivingCellsNeighbouringMainCell += 1;

        //THEN
        assertEquals(neighboursToSpawnAlive, numberOfLivingCellsNeighbouringMainCell);
    }

    private Cell[][] cellsCreator(int size, int living) {

        Cell[][] cells = new Cell[size][size];
        int aliveCounter = 0;

        for (int x = 0; x < cells.length; x++) {
            for (int y = 0; y < cells[0].length; y++) {
                if (aliveCounter < living) {
                    cells[x][y] = new Cell(true);
                    aliveCounter++;
                } else {
                    cells[x][y] = new Cell();
                }
            }
        }

        return cells;
    }
}