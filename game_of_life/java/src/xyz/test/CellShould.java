package xyz.test;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import xyz.main.Cell;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class CellShould {

    @Test
    void spawnDead() {
        Assertions.assertFalse(new Cell().isAlive());
    }

    @Test
    void dieIfLessThanTwoNeighboursAreAlive() {
        //GIVEN
        Cell mainCell = new Cell(true);
        ArrayList<Cell> NeighbouringCells = neighbouringCellsCreator(1);

        //WHEN
        mainCell.setStateBasedOnNeighbours(NeighbouringCells);

        //THEN
        assertFalse(mainCell.isAlive());
    }

    @Test
    void dieIfMoreThanThreeNeighboursAreAlive() {
        //GIVEN
        Cell mainCell = new Cell(true);
        ArrayList<Cell> NeighbouringCells = neighbouringCellsCreator(4);

        //WHEN
        mainCell.setStateBasedOnNeighbours(NeighbouringCells);

        //THEN
        assertFalse(mainCell.isAlive());
    }

    @Test
    void liveIfExactlyThreeNeighboursAreAlive() {
        //GIVEN
        Cell mainCell = new Cell(false);
        ArrayList<Cell> NeighbouringCells = neighbouringCellsCreator(3);

        //WHEN
        mainCell.setStateBasedOnNeighbours(NeighbouringCells);

        //THEN
        assertTrue(mainCell.isAlive());
    }

    @Test
    void stayAliveIfExactlyThreeNeighboursAreAlive() {
        //GIVEN
        Cell mainCell = new Cell(true);
        ArrayList<Cell> NeighbouringCells = neighbouringCellsCreator(3);

        //WHEN
        mainCell.setStateBasedOnNeighbours(NeighbouringCells);

        //THEN
        assertTrue(mainCell.isAlive());
    }

    private ArrayList<Cell> neighbouringCellsCreator(int living) {

        ArrayList<Cell> list = new ArrayList<>();
        for (int i = 0; i < 8; i++) {

            list.add(new Cell((i < living)));
        }
        return list;
    }
}