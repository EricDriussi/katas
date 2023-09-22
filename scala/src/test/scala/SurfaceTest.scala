import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

class SurfaceTest extends AnyFlatSpec with Matchers {
    "The Surface" should "validate if coordinates are not contained" in {
        val surface = Surface(15, 15)
        val coord   = Coordinates(20, 20)

        assertResult(false) {
            surface.contains(coord)
        }
    }

    "The Surface" should "validate if coordinates are contained" in {
        val surface = Surface(15, 15)
        val coord   = Coordinates(10, 10)

        assertResult(true) {
            surface.contains(coord)
        }
    }
}
