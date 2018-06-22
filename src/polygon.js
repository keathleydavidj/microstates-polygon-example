export default class Polygon {
  sides = Number;
  sideLength = Number;

  incrementSides(value = 1) {
    if (this.state.sides + value < 3) {
      return this;
    } else {
      return this.sides.increment(value);
    }
  }
  get canDecrement() {
    return this.sides > 3;
  }
}