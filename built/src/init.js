"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = exports.initializeCLI = void 0;
const colors_1 = require("./colors");
const format_1 = require("./format");
const defaultFormat = {
    DEFAULT: colors_1.TEXT_COLOR.reset,
    MAJOR: colors_1.TEXT_COLOR.green,
    MINOR: colors_1.TEXT_COLOR.dim,
    HIGHLIGHT: {
        DEFAULT: colors_1.HIGHLIGHT_COLOR.BGwhite,
        MAJOR: colors_1.HIGHLIGHT_COLOR.BGgreen,
    },
};
let settings = {
    format: defaultFormat,
    width: 80,
    colorLog: true,
    prompt: '|>',
    promptConfirm: '|=> ',
    promptReject: '|-|',
    programName: '',
};
exports.settings = settings;
const initializeCLI = (userSettings) => {
    Object.keys(userSettings).forEach((key) => (settings[key] = userSettings[key]));
    if (format_1.coloredLogs)
        (0, format_1.enableColoredLogs)(settings.format);
};
exports.initializeCLI = initializeCLI;
