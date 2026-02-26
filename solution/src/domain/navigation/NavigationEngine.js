class NavigationEngine {
  move(pos, ori, command, sensors) {
    if (command === "F") {
      if (sensors.frontIsFree(pos, ori)) {
        const { dx, dy } = ori.stepFoward();
        return pos.move(dx, dy);
      }

      if (sensors.rightIsFree(pos, ori)) {
        const right = ori.right();
        const { dx, dy } = right.stepFoward();
        return pos.move(dx, dy);
      }

      if (sensors.leftIsFree(pos, ori)) {
        const left = ori.left();
        const { dx, dy } = left.stepFoward();
        return pos.move(dx, dy);
      }

      if (sensors.backIsFree(pos, ori)) {
        const { dx, dy } = ori.stepFoward();
        return pos.move(-dx, -dy);
      }

      return pos;
    }

    if (command === "B") {
      if (sensors.backIsFree(pos, ori)) {
        const { dx, dy } = ori.stepFoward();
        return pos.move(-dx, -dy);
      }

      if (sensors.leftIsFree(pos, ori)) {
        const left = ori.left();
        const { dx, dy } = left.stepFoward();
        return pos.move(dx, dy);
      }

      if (sensors.rightIsFree(pos, ori)) {
        const right = ori.right();
        const { dx, dy } = right.stepFoward();
        return pos.move(dx, dy);
      }

      if (sensors.frontIsFree(pos, ori)) {
        const { dx, dy } = ori.stepFoward();
        return pos.move(dx, dy);
      }

      return pos;
    }

    return pos;
  }
}

module.exports = { NavigationEngine };