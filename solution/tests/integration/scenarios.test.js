const { RoverController } = require("../../src/controllers/RoverController");
const { ExecuteRoverCommands } = require("../../src/use-cases/ExecuteRoverCommands");

describe("Example Outputputs", () => {
  test("Scenario 1: Simple Path with No Obstacles", async () => {
    const roverController = new RoverController({
      executeRoverCommands: new ExecuteRoverCommands(),
    });

    const input = {
      grid: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      initialPosition: { x: 0, y: 0 },
      initialOrientation: "E",
      commands: ["F", "F", "R", "F", "S"],
    };

    const output = await roverController.run(input);

    expect(output.finalPosition).toEqual({ x: 2, y: 1 });
    expect(output.finalOrientation).toBe("S");
    expect(output.dataCollected).toEqual([{ x: 2, y: 1 }]);
  });

  test("Scenario 2: Encountering and Avoiding Obstacles", async () => {
    const roverController = new RoverController({
      executeRoverCommands: new ExecuteRoverCommands(),
    });

    const input = {
      grid: [
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 1, 0],
      ],
      initialPosition: { x: 0, y: 0 },
      initialOrientation: "E",
      commands: ["F", "F", "R", "F", "F", "L", "F", "S"],
    };

    const output = await roverController.run(input);

    expect(output.finalPosition).toEqual({ x: 3, y: 1 });
    expect(output.finalOrientation).toBe("N");
    expect(output.dataCollected).toEqual([{ x: 3, y: 1 }]);
  });

  test("Scenario 3: Complex Path with Multiple Obstacles", async () => {
    const roverController = new RoverController({
      executeRoverCommands: new ExecuteRoverCommands(),
    });

    const input = {
      grid: [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 1, 0, 0],
      ],
      initialPosition: { x: 0, y: 0 },
      initialOrientation: "E",
      commands: ["F", "R", "F", "F", "L", "F", "F", "R", "F", "S"],
    };

    const output = await roverController.run(input);

    expect(output.finalPosition).toEqual({ x: 3, y: 2 });
    expect(output.finalOrientation).toBe("S");
    expect(output.dataCollected).toEqual([{ x: 3, y: 2 }]);
  });

  test("Scenario 4: Hitting the Boundary of the Grid", async () => {
    const roverController = new RoverController({
      executeRoverCommands: new ExecuteRoverCommands(),
    });

    const input = {
      grid: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
      initialPosition: { x: 2, y: 0 },
      initialOrientation: "E",
      commands: ["F", "L", "F", "F", "S"],
    };

    const output = await roverController.run(input);

    expect(output.finalPosition).toEqual({ x: 1, y: 1 });
    expect(output.finalOrientation).toBe("W");
    expect(output.dataCollected).toEqual([{ x: 1, y: 1 }]);
  });
});