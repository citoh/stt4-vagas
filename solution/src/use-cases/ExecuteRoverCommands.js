const { Grid } = require("../domain/map/Grid");
const { Position } = require("../domain/core/Position");
const { Orientation } = require("../domain/core/Orientation");
const { Rover } = require("../domain/rover/Rover");
const { NavigationEngine } = require("../domain/navigation/NavigationEngine");

class ExecuteRoverCommands {
    constructor(deps = {}) {
        this.NavigationEngine = deps.NavigationEngine ?? new NavigationEngine();
    }

    async run(input) {
        const commands = normalizeCommands(input.commands);

        const grid = new Grid(input.grid);
        const rover = new Rover({
            grid,
            position: new Position(input.initialPosition.x, input.initialPosition.y),
            orientation: new Orientation(input.initialOrientation),
            navigation: this.NavigationEngine,
        });

        for (const cmd of commands) {
            rover.execute(cmd);
        }

        return {
            finalPosition: { x: rover.position.x, y: rover.position.y },
            finalOrientation: rover.orientation.value,
            dataCollected: rover.collected.map(p => ({ x: p.x, y: p.y })),
        };
    }
}

function normalizeCommands(commands) {
    if (Array.isArray(commands)) return commands;
    if (typeof commands === "string") {
        if (commands.includes(",")) return commands.split(",").map(s => s.trim()).filter(Boolean);
        return commands.split("").map(c => c.trim()).filter(Boolean);
    }
    throw new Error("commands must be an array or string");
}

module.exports = { ExecuteRoverCommands };