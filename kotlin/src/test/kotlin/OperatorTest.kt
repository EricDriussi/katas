import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class OperatorTest {

	@Test
	fun sum() {
		val operator = Operator()
		assertEquals(5, operator.sum(2, 3))
	}
}