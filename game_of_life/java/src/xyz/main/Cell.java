package xyz.main;

import java.util.ArrayList;
import java.util.List;

public class Cell {

    public Cell() {
        this.alive = false;
    }

    public Cell(boolean alive) {
        this.alive = alive;
    }

    private boolean alive;

    public boolean isAlive() {
        return alive;
    }

    public void setStateBasedOnNeighbours(ArrayList<Cell> cells) {

        int livingNeighbours = getLivingNeighbours(cells);

        if (livingNeighbours < 2)
            kill();

        if (livingNeighbours > 3)
            kill();

        if (livingNeighbours == 3)
            revive();
    }

    private Integer getLivingNeighbours(ArrayList<Cell> cells) {
        return cells.stream()
                .reduce(
                        0,
                        (livingTotal, cell) -> (cell.isAlive()) ? livingTotal + 1 : livingTotal,
                        Integer::sum
                );
    }

    private void kill(){ this.alive = false; }

    private void revive(){ this.alive = true; }

    @Override
    public String toString() {
        return (alive)?"*":".";
    }
}
