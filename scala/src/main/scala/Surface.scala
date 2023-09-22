case class Surface(x: Int, y: Int) {
  def contains(coord: Coordinates): Boolean = {
    coord.latitude < x && coord.longitude < y
  }

}
