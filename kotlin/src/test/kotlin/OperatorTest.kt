import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*

class OperatorTest {

    @Test
    fun sum() {
        val operator = Operator()
        assertEquals(5, operator.sum(2, 3))
    }
}