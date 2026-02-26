const { Sensors } = require("./Sensors");

class Rover {
  constructor({ grid, position, orientation, navigation }) {
    if (!grid.isFree(position)) {
      throw new Error("Initial position must be inside the grid and on a free cell");
    }

    this.grid = grid;
    this.position = position;
    this.orientation = orientation;
    this.navigation = navigation;
    this.sensors = new Sensors(grid);
    this.collected = [];
  }

  execute(cmd) {
    const controls = {
      L: () => {
        this.orientation = this.orientation.left();
      },

      R: () => {
        this.orientation = this.orientation.right();
      },

      F: () => {
        this.position = this.navigation.move(
          this.position,
          this.orientation,
          cmd,
          this.sensors
        );
      },

      B: () => {
        this.position = this.navigation.move(
          this.position,
          this.orientation,
          cmd,
          this.sensors
        );
      },

      S: () => {
        this.collected.push(this.position);
      },
    };

    if (typeof controls[cmd] === "function") {
      controls[cmd]();
    }
  }
}

module.exports = { Rover };