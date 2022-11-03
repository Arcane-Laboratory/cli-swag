"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommands = exports.addCommand = exports.usageInfo = exports.commands = void 0;
const animation_1 = require("./animation");
const format_1 = require("./format");
const log_1 = require("./log");
const helpCommand = {
    name: 'help',
    aliases: ['cmds'],
    description: 'displays a list of commands',
    callback: async () => {
        const helpText = [`There are ${commands.length} commands available to use:`];
        commands.forEach((command, i) => {
            helpText.push(`${format_1.FORMAT.MAJOR.trim()}${command.name}${format_1.FORMAT.DEFAULT.trim()}${command.description ? ` - ${command.description}` : ''}`);
            if (command.aliases && command.aliases.length > 0)
                helpText.push(`${format_1.FORMAT.MINOR.trim()}  aka: ${command.aliases.join(', ')}${format_1.FORMAT.DEFAULT.trim()}`);
        });
        (0, log_1.log)(helpText.join('\n  '));
        return true;
    },
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
const commands = [helpCommand, animation_1.jesterCommand];
exports.commands = commands;
const addCommand = (command) => {
    commands.push(command);
};
exports.addCommand = addCommand;
const addCommands = (commandArray) => {
    commandArray.forEach((command) => commands.push(command));
};
exports.addCommands = addCommands;
