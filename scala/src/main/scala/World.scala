class World(surface: Surface) {}

object World {
    def apply(surface: Surface, rover: Rover): World = {
        if (!surface.contains(rover.coordinates)) {
            throw new OutOfWorldException
        }
        new World(surface)
    }
}
