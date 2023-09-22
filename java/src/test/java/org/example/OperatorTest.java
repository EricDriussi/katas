package org.example;

import org.junit.jupiter.api.Test;

public class OperatorTest {
    @Test
    public void testAdd() {
        int expected = 3;
        int actual = Operator.add(1, 2);
        assert expected == actual;
    }
}
