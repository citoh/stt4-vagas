class Position {
  constructor(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw new Error("Position coordinates must be integers");
    }
    this.x = x;
    this.y = y;
    Object.freeze(this);
  }

  move(dx, dy) {
    return new Position(this.x + dx, this.y + dy);
  }

  key() {
    return `${this.x},${this.y}`;
  }
}

module.exports = { Position };