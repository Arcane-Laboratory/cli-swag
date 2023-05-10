"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FORMAT = exports.colorMinor = exports.colorMajor = exports.colorHighlight = exports.colorCallout = exports.CHECK = exports.enableColoredLogs = void 0;
const colors_1 = require("./colors");
const init_1 = require("./init");
let CHECK = ' ✓ ';
exports.CHECK = CHECK;
let FORMAT = {
    DEFAULT: ' ',
    MAJOR: '',
    MINOR: '',
    WARN: '',
    ERROR: '',
    HIGHLIGHT: {
        DEFAULT: ' ',
        MAJOR: ' ',
        WARN: ' ',
        ERROR: ' ',
    },
};
exports.FORMAT = FORMAT;
const enableColoredLogs = (color) => {
    const ERR = color == 'RED' ? colors_1.TEXT.MAGENTA : colors_1.TEXT.RED;
    const WARN = color == 'YELLOW' ? colors_1.TEXT.CYAN : colors_1.TEXT.YELLOW;
    const ERR_HIGHLIGHT = color == 'RED' ? colors_1.HIGHLIGHT.MAGENTA : colors_1.HIGHLIGHT.RED;
    const WARN_HIGHLIGHT = color == 'YELLOW' ? colors_1.HIGHLIGHT.CYAN : colors_1.HIGHLIGHT.YELLOW;
    exports.FORMAT = FORMAT = {
        DEFAULT: ' ' + colors_1.TEXT.reset + ' ',
        MAJOR: ' ' + colors_1.reset + colors_1.TEXT[color],
        MINOR: ' ' + colors_1.reset + colors_1.TEXT.dim,
        WARN: WARN,
        ERROR: ERR,
        HIGHLIGHT: {
            DEFAULT: colors_1.HIGHLIGHT.WHITE,
            MAJOR: colors_1.HIGHLIGHT[color],
            WARN: WARN_HIGHLIGHT,
            ERROR: ERR_HIGHLIGHT,
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
const colorCallout = (string) => {
    if (init_1.settings.color == undefined || init_1.settings.color == false)
        return ` ${string} `;
    return `${highlightFormat(colors_1.HIGHLIGHT[init_1.settings.color])}${string}${colors_1.spacedReset}`;
};
exports.colorCallout = colorCallout;
const colorHighlight = (string) => {
    if (init_1.settings.color == undefined || init_1.settings.color == false)
        return ` ${string} `;
    return `${highlightFormat(colors_1.HIGHLIGHT.WHITE)}${string}${colors_1.spacedReset}`;
};
exports.colorHighlight = colorHighlight;
const colorMajor = (string) => {
    if (init_1.settings.color == undefined || init_1.settings.color == false)
        return string.toString();
    return `${colors_1.TEXT[init_1.settings.color]}${string}${colors_1.reset}`;
};
exports.colorMajor = colorMajor;
const colorMinor = (string) => {
    if (init_1.settings.color == undefined || init_1.settings.color == false)
        return string.toString();
    return `${colors_1.TEXT.dim}${string}${colors_1.reset}`;
};
exports.colorMinor = colorMinor;
