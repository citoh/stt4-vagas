const { DIRECTIONS, ORIENTATIONS } = require("../../helpers/constants");

class Orientation {
  constructor(value) {
    if (!ORIENTATIONS.includes(value)) {
      throw new Error(`Invalid orientation: ${value}`);
    }
    this.value = value;
  }

  left() {
    const ori = ORIENTATIONS.indexOf(this.value);
    return new Orientation(ORIENTATIONS[(ori - 1 + 4) % 4]);
  }

  right() {
    const ori = ORIENTATIONS.indexOf(this.value);
    return new Orientation(ORIENTATIONS[(ori + 1) % 4]);
  }

  stepFoward() {
    return DIRECTIONS[this.value];
  }
}

module.exports = { Orientation };