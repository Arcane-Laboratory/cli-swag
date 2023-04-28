"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spacedReset = exports.reset = exports.reverse = exports.blink = exports.hidden = exports.underscore = exports.HIGHLIGHT = exports.TEXT = void 0;
const underscore = '\x1b[4m';
exports.underscore = underscore;
const blink = '\x1b[5m';
exports.blink = blink;
const reverse = '\x1b[7m';
exports.reverse = reverse;
const hidden = '\x1b[8m';
exports.hidden = hidden;
const reset = '\x1b[0m';
exports.reset = reset;
const spacedReset = ` ${reset} `;
exports.spacedReset = spacedReset;
var TEXT;
(function (TEXT) {
    TEXT["BLACK"] = "\u001B[30m";
    TEXT["RED"] = "\u001B[31m";
    TEXT["GREEN"] = "\u001B[32m";
    TEXT["YELLOW"] = "\u001B[33m";
    TEXT["ORANGE"] = "\u001B[38; 5; 202m";
    // ORANGE = '\x1b[38; 5; 202m',
    TEXT["BLUE"] = "\u001B[34m";
    TEXT["MAGENTA"] = "\u001B[35m";
    TEXT["CYAN"] = "\u001B[36m";
    TEXT["WHITE"] = "\u001B[37m";
    TEXT["reset"] = "\u001B[0m";
    TEXT["bright"] = "\u001B[1m";
    // dim = '\x1b[2m',
    TEXT["dim"] = "\u001B[30m";
})(TEXT || (TEXT = {}));
exports.TEXT = TEXT;
var HIGHLIGHT;
(function (HIGHLIGHT) {
    HIGHLIGHT["BLACK"] = "\u001B[40m";
    HIGHLIGHT["RED"] = "\u001B[41m";
    HIGHLIGHT["GREEN"] = "\u001B[42m";
    HIGHLIGHT["YELLOW"] = "\u001B[43m";
    HIGHLIGHT["ORANGE"] = "\u001B[48; 5; 202m";
    HIGHLIGHT["BLUE"] = "\u001B[44m";
    HIGHLIGHT["MAGENTA"] = "\u001B[45m";
    HIGHLIGHT["CYAN"] = "\u001B[46m";
    HIGHLIGHT["WHITE"] = "\u001B[47m";
})(HIGHLIGHT || (HIGHLIGHT = {}));
exports.HIGHLIGHT = HIGHLIGHT;
