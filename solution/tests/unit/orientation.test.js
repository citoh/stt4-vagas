const { Orientation } = require("../../src/domain/core/Orientation");

test("Orientation turns left correctly", () => {
  expect(new Orientation("N").left().value).toBe("W");
  expect(new Orientation("E").left().value).toBe("N");
  expect(new Orientation("S").left().value).toBe("E");
  expect(new Orientation("W").left().value).toBe("S");
});

test("Orientation turns right correctly", () => {
  expect(new Orientation("N").right().value).toBe("E");
  expect(new Orientation("E").right().value).toBe("S");
  expect(new Orientation("S").right().value).toBe("W");
  expect(new Orientation("W").right().value).toBe("N");
});

test("Orientation forward vector", () => {
  expect(new Orientation("N").stepFoward()).toEqual({ dx: 0, dy: -1 });
  expect(new Orientation("E").stepFoward()).toEqual({ dx: 1, dy: 0 });
  expect(new Orientation("S").stepFoward()).toEqual({ dx: 0, dy: 1 });
  expect(new Orientation("W").stepFoward()).toEqual({ dx: -1, dy: 0 });
});