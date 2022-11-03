"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHECK = exports.FORMAT = exports.coloredLogs = exports.enableColoredLogs = void 0;
const colors_1 = require("./colors");
const coloredLogs = true;
exports.coloredLogs = coloredLogs;
let CHECK = ' ✓ ';
exports.CHECK = CHECK;
let FORMAT = {
    DEFAULT: ' ',
    MAJOR: '',
    MINOR: '',
    HIGHLIGHT: {
        DEFAULT: ' ',
        MAJOR: ' ',
        WARN: ' ',
        ERROR: ' ',
    },
};
exports.FORMAT = FORMAT;
const enableColoredLogs = (format) => {
    const { DEFAULT, MAJOR, MINOR, HIGHLIGHT } = format;
    const ERR = HIGHLIGHT.ERROR ? HIGHLIGHT.ERROR : colors_1.HIGHLIGHT_COLOR.BGred;
    const WARN = HIGHLIGHT.WARN ? HIGHLIGHT.WARN : colors_1.HIGHLIGHT_COLOR.BGyellow;
    exports.FORMAT = FORMAT = {
        DEFAULT: ' ' + DEFAULT + ' ',
        MAJOR: ' ' + colors_1.reset + MAJOR,
        MINOR: ' ' + colors_1.reset + MINOR,
        HIGHLIGHT: {
            DEFAULT: highlightFormat(HIGHLIGHT.DEFAULT),
            MAJOR: highlightFormat(HIGHLIGHT.MAJOR),
            WARN: highlightFormat(WARN),
            ERROR: highlightFormat(ERR),
        },
    };
    exports.CHECK = CHECK = ' ' + colors_1.TEXT_COLOR.green + '✓' + colors_1.reset + ' ';
};
exports.enableColoredLogs = enableColoredLogs;
const highlightFormat = (color) => {
    const textColor = color == colors_1.HIGHLIGHT_COLOR.BGblack ? colors_1.TEXT_COLOR.white : colors_1.TEXT_COLOR.black;
    return ' ' + colors_1.reset + color + textColor + ' ';
};
