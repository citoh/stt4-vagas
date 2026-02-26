const { Grid } = require("../../src/domain/map/Grid");
const { Position } = require("../../src/domain/core/Position");

test("Grid bounds and free cells", () => {
  const grid = new Grid([
    [0, 1],
    [0, 0],
  ]);

  expect(grid.width()).toBe(2);
  expect(grid.height()).toBe(2);

  expect(grid.inBounds(new Position(0, 0))).toBe(true);
  expect(grid.inBounds(new Position(1, 1))).toBe(true);

  expect(grid.inBounds(new Position(-1, 0))).toBe(false);
  expect(grid.inBounds(new Position(2, 0))).toBe(false);

  expect(grid.isFree(new Position(0, 0))).toBe(true);
  expect(grid.isFree(new Position(1, 0))).toBe(false);
  expect(grid.isFree(new Position(1, 1))).toBe(true);
});