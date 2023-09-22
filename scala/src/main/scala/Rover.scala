class Rover(var coordinates: Coordinates, direction: String) {
    def runCommand(str: String): Unit = {
        if (str.equals("f")) {
            this.coordinates =
                Coordinates(this.coordinates.latitude + 1, this.coordinates.longitude)
        }
    }
}
