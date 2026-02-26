class RoverController {
    constructor({ executeRoverCommands }) {
        this.executeRoverCommands = executeRoverCommands;
    }

    async run(input) {
        return this.executeRoverCommands.run(input);
    }
}

module.exports = { RoverController };