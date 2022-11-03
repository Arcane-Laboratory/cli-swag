"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommands = exports.addCommand = exports.usageInfo = exports.commands = void 0;
const helpCommand = {
    name: 'help',
    aliases: ['cmds'],
    description: 'displays a list of commands',
    callback: async () => {
        const helpText = [`I'm here to help!`];
        commands.forEach((command) => helpText.push(command.name + command.description ? ` - ${command.description}` : ''));
        console.log(helpText.join('\n'));
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
const commands = [helpCommand];
exports.commands = commands;
const addCommand = (command) => {
    commands.push(command);
};
exports.addCommand = addCommand;
const addCommands = (commandArray) => {
    commandArray.forEach((command) => commands.push(command));
};
exports.addCommands = addCommands;
