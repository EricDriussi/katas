package tests;

import org.junit.jupiter.api.Test;
import xyz.eric.Logic;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LogicShould {

    @Test
    void workWithExpressionStartingWithSlash(){
        assertEquals(6, Logic.sumNumbersIn("//#/3#3"));
        assertEquals(6, Logic.sumNumbersIn("//%%/3%%3"));
    }

    @Test
    void actuallySumNumbers(){
        assertEquals(42, Logic.sumNumbersIn("30,10,2"));
    }

    @Test
    void sumNumbersDiscartingChars(){
        assertEquals(32, Logic.sumNumbersIn("30,u,2"));
    }

    @Test
    void sumNumbersDiscartingNumbersWithChars(){
        assertEquals(32, Logic.sumNumbersIn("30,u10,2"));
    }

    @Test
    void sumNumersNotDiscartingNumbersWithSpaces(){
        assertEquals(42, Logic.sumNumbersIn("30, 10,2"));
    }
}