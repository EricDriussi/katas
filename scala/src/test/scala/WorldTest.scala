import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

// Hay un punto de inicio x,y -> position
// NSEW -> direction
// fblr -> commands taken by Rover
// wrap edges
// Detectar obstáculos (Si llegamos)

class WorldTest extends AnyFlatSpec with Matchers {
    "The Rover" should "not exist out of the World" in {
        val coord   = Coordinates(6, 6)
        val rover   = new Rover(coord, "N")
        val surface = Surface(5, 5)

        intercept[OutOfWorldException] {
            World.apply(surface, rover)
        }
    }

    "The Rover" should "exist within the World" in {
        val coord   = Coordinates(4, 4)
        val rover   = new Rover(coord, "N")
        val surface = Surface(5, 5)

        noException should be thrownBy World.apply(surface, rover)
    }

}
