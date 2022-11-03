"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = exports.initializeCLI = void 0;
const command_1 = require("./command");
const format_1 = require("./format");
const defaultColor = 'BLUE';
let settings = {
    color: defaultColor,
    width: 70,
    prompt: '|> ',
    promptConfirm: '|=>',
    promptReject: '|-|',
    programName: '',
};
exports.settings = settings;
const initializeCLI = (userSettings, commands) => {
    Object.keys(userSettings).forEach((key) => (settings[key] = userSettings[key]));
    if (format_1.coloredLogs)
        (0, format_1.enableColoredLogs)(settings.color);
    if (commands)
        (0, command_1.addCommands)(commands);
};
exports.initializeCLI = initializeCLI;
