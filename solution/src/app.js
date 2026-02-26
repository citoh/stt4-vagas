const { RoverController } = require("./controllers/RoverController");
const { ExecuteRoverCommands } = require("./use-cases/ExecuteRoverCommands");

async function main() {
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

  const result = await roverController.run(input);
  console.log(JSON.stringify(result, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});