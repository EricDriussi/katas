package xyz.main;

import java.util.ArrayList;
import java.util.Random;

public class Board {

    private static Cell[][] cells;
    private static final int defaultSize = 20;

    public Board(int size) {
        cells = new Cell[size][size];
        Random rand = new Random();
        for (int x = 0; x < cells.length; x++) {
            for (int y = 0; y < cells[0].length; y++) {
                cells[x][y] = new Cell(rand.nextBoolean());
            }
        }
    }

    public Board(Cell[][] cells) {
        Board.cells = cells;
    }

    public Board() {
        this(defaultSize);
    }

    //Hacer esto con TDD
//    public void createGeneration(){
//        ArrayList<Cell> neighbours = new ArrayList<>();
//        for (int x = 0; x < cells.length; x++) {
//            for (int y = 0; y < cells[0].length; y++) {
//                neighbours.add(cells[x][y-1]);
//                neighbours.add(cells[x][y+1]);
//                neighbours.add(cells[x+1][y-1]);
//                neighbours.add(cells[x+1][y+1]);
//                neighbours.add(cells[x+1][y]);
//                neighbours.add(cells[x-1][y-1]);
//                neighbours.add(cells[x-1][y+1]);
//                neighbours.add(cells[x-1][y]);
//                cells[x][y].setStateBasedOnNeighbours(neighbours);
//            }
//        }
//    }

    public Cell[][] getCells() {
        return cells;
    }

    public ArrayList<Cell> getNeighbouringCells(int x, int y) {

        ArrayList<Cell> neighbours = new ArrayList<>();

        if (x > 0) {

            neighbours.add(cells[x - 1][y]);
        }
        if (x > 0 && y < cells.length-1) {

            neighbours.add(cells[x - 1][y + 1]);
        }
        if (y > 0) {

            neighbours.add(cells[x][y - 1]);
        }
        if (y > 0 && x < cells.length-1) {

            neighbours.add(cells[x + 1][y - 1]);
        }
        if (x > 0 && y > 0) {

            neighbours.add(cells[x - 1][y - 1]);
        }
        if (x < cells.length-1) {

            neighbours.add(cells[x + 1][y]);
        }
        if (y < cells.length-1) {

            neighbours.add(cells[x][y + 1]);
        }
        if (x < cells.length-1 && y < cells.length-1) {

            neighbours.add(cells[x + 1][y + 1]);
        }

        return neighbours;
    }

    void sendNeighboursToCell(int x, int y) {
        cells[x][y].setStateBasedOnNeighbours(getNeighbouringCells(x, y));
    }

    public void refresh(int times) throws InterruptedException {

        for (int i = 0; i < times; i++) {
            for (int x = 0; x < cells.length; x++) {
                for (int y = 0; y < cells[0].length; y++) {
                    this.sendNeighboursToCell(x, y);
                }
            }
            Thread.sleep(200);
            System.out.println(this);
            System.out.flush();
        }
    }

    @Override
    public String toString() {
        StringBuilder printedBoard = new StringBuilder();
        for (Cell[] cellRow : cells) {
            for (Cell cell : cellRow) {
                printedBoard.append(cell.toString());
            }
            printedBoard.append("\n");
        }
        return String.valueOf(printedBoard);
    }
}
