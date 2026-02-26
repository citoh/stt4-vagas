const ORIENTATIONS = ["N", "E", "S", "W"];

const DIRECTIONS = {
  N: { dx: 0, dy: -1 },
  E: { dx: 1, dy: 0 },
  S: { dx: 0, dy: 1 },
  W: { dx: -1, dy: 0 }
};

module.exports = { ORIENTATIONS, DIRECTIONS };