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
const enableColoredLogs = (color) => {
    const ERR = color == 'RED' ? colors_1.HIGHLIGHT.MAGENTA : colors_1.HIGHLIGHT.RED;
    const WARN = color == 'YELLOW' ? colors_1.HIGHLIGHT.CYAN : colors_1.HIGHLIGHT.YELLOW;
    exports.FORMAT = FORMAT = {
        DEFAULT: ' ' + colors_1.TEXT.reset + ' ',
        MAJOR: ' ' + colors_1.reset + colors_1.TEXT[color],
        MINOR: ' ' + colors_1.reset + colors_1.TEXT.dim,
        HIGHLIGHT: {
            DEFAULT: highlightFormat(colors_1.HIGHLIGHT.WHITE),
            MAJOR: highlightFormat(colors_1.HIGHLIGHT[color]),
            WARN: highlightFormat(WARN),
            ERROR: highlightFormat(ERR),
        },
    };
    exports.CHECK = CHECK = ' ' + colors_1.TEXT[color] + '✓' + colors_1.reset + ' ';
};
exports.enableColoredLogs = enableColoredLogs;
const highlightFormat = (color) => {
    const textColor = color == colors_1.HIGHLIGHT.BLACK ? colors_1.TEXT.WHITE : colors_1.TEXT.BLACK;
    const formatString = ` ${colors_1.reset}${color}${textColor} `;
    return formatString;
};
