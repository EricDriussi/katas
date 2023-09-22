import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

class OperatorTest extends AnyFlatSpec with Matchers {
  "The sum method" should "return the sum of two numbers" in {
    val operator = new Operator()
    val result = operator.sum(2, 3)
    result should equal(5)
  }
}