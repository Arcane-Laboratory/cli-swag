"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = exports.runCLI = void 0;
const readline_1 = require("readline");
const colors_1 = require("./colors");
const command_1 = require("./command");
const format_1 = require("./format");
const init_1 = require("./init");
const log_1 = require("./log");
const util_1 = require("./util");
let cli;
exports.cli = cli;
/**
 * A function which initiates a command line parser for future functionality
 * @returns A command line parser which doesn't do anything... yet...
 */
const runCLI = () => {
    const prompt = format_1.FORMAT.MAJOR + init_1.settings.prompt + colors_1.reset;
    const promptConfirm = format_1.FORMAT.MAJOR + init_1.settings.promptConfirm + colors_1.reset;
    const promptReject = format_1.FORMAT.MAJOR + init_1.settings.promptReject + colors_1.reset;
    // initialize client-agnostic functionality with the first beaconConfig Recieved
    if (cli)
        return cli; // should only run once
    exports.cli = cli = (0, readline_1.createInterface)({
        input: process.stdin,
        output: process.stdout,
        prompt: prompt,
    });
    cli.on('line', async (line) => {
        let foundCommand;
        command_1.commands.forEach((cliCommand) => {
            if (cliCommand.name == line.trim()) {
                foundCommand = cliCommand;
                return;
            }
        });
        if (foundCommand) {
            await (0, util_1.sleep)(200);
            (0, readline_1.clearLine)(process.stdout, 0);
            (0, readline_1.moveCursor)(process.stdout, 0, -1);
            (0, readline_1.clearLine)(process.stdout, 0);
            process.stdout.write(format_1.FORMAT.MAJOR + init_1.settings.promptConfirm + line + colors_1.reset + '\n');
            await (0, util_1.sleep)(200);
            await foundCommand.callback();
            cli?.prompt();
        }
        else {
            (0, readline_1.clearLine)(process.stdout, 0);
            (0, readline_1.moveCursor)(process.stdout, 0, -1);
            (0, readline_1.clearLine)(process.stdout, 0);
            process.stdout.write(format_1.FORMAT.MAJOR +
                init_1.settings.promptReject +
                format_1.FORMAT.MINOR +
                line +
                colors_1.reset +
                '/n');
            (0, log_1.log)(`No command found '${line}'. Use 'help' for a list of commands`);
            cli?.prompt();
        }
    });
    (0, log_1.log)(format_1.CHECK +
        'CLI: LOADED' +
        format_1.FORMAT.HIGHLIGHT.MAJOR +
        command_1.commands.length +
        colors_1.reset +
        'CLI COMMANDS', true);
    return cli;
};
exports.runCLI = runCLI;
