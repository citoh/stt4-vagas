class Sensors {
  constructor(grid) {
    this.grid = grid;
  }

  frontIsFree(pos, ori) {
    const { dx, dy } = ori.stepFoward();
    return this.grid.isFree(pos.move(dx, dy));
  }

  backIsFree(pos, ori) {
    const { dx, dy } = ori.stepFoward();
    return this.grid.isFree(pos.move(-dx, -dy));
  }

  rightIsFree(pos, ori) {
    const right = ori.right();
    const { dx, dy } = right.stepFoward();
    return this.grid.isFree(pos.move(dx, dy));
  }

  leftIsFree(pos, ori) {
    const left = ori.left();
    const { dx, dy } = left.stepFoward();
    return this.grid.isFree(pos.move(dx, dy));
  }
}

module.exports = { Sensors };