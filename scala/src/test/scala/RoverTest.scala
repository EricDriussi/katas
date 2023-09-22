import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

class RoverTest extends AnyFlatSpec with Matchers {
    "The Rover" should "be able to move forward" in {
        val coord = Coordinates(5, 6)
        val rover = new Rover(coord, "N")

        rover.runCommand("f")

        assertResult(Coordinates(6, 6)) {
            rover.coordinates
        }
    }
}
