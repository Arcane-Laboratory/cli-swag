"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommands = exports.addCommand = exports.usageInfo = exports.commands = void 0;
const animation_1 = require("./animation");
const error_1 = require("./error");
const format_1 = require("./format");
const log_1 = require("./log");
const helpCommand = {
    name: 'help',
    aliases: ['cmds'],
    description: 'displays a list of commands',
    callback: async () => {
        const helpText = [`There are ${commands.length} commands available to use:`];
        commands.forEach((command, i) => {
            helpText.push(`$${(0, format_1.colorMajor)(command.name)}${command.description
                ? ` - ${(0, log_1.lineLimit)(command.description, 50).join('\n    ')}`
                : ''}`);
            if (command.aliases && command.aliases.length > 0)
                helpText.push((0, format_1.colorMinor)(`  aka: ${command.aliases.join(', ')}`));
        });
        (0, log_1.log)(helpText.join('\n  '));
        return true;
    },
};
const errTest = {
    callback: async () => {
        (0, log_1.warn)('Test Warning', 'this warning is for checking formatting, etc.');
        new error_1.Err('Test Error', 'this warning is for checking formatting, etc.').log();
        return;
    },
    name: 'error',
    aliases: ['warn', 'testError'],
    description: 'display a test warning and a test error message',
};
const usageInfo = (command) => {
    const { name, aliases, description, maxArgs, minArgs } = command;
    const str = [name];
    if (description)
        str.push(description);
    if (aliases && aliases.length > 0) {
        const aliasInfo = ['aliases: '];
        aliases.forEach((alias) => aliasInfo.push(alias));
        str.push(aliasInfo.join(', '));
    }
    if (minArgs || maxArgs) {
        let argString = 'accepts ';
        if (minArgs) {
            argString += minArgs.toString();
            if (maxArgs)
                argString += ' - ';
        }
        if (maxArgs)
            argString += maxArgs.toString();
        argString += ' arguments';
        str.push(argString);
    }
    return str.join('\n  ');
};
exports.usageInfo = usageInfo;
const commands = [helpCommand, animation_1.jesterCommand, errTest];
exports.commands = commands;
const addCommand = (command) => {
    commands.push(command);
};
exports.addCommand = addCommand;
const addCommands = (commandArray) => {
    commandArray.forEach((command) => commands.push(command));
};
exports.addCommands = addCommands;
