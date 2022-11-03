"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logHold = exports.addToLogBuffer = exports.logBar = exports.log = exports.warn = exports.lineLimit = exports.writeLogBuffer = void 0;
const readline_1 = require("readline");
const cli_1 = require("./cli");
const colors_1 = require("./colors");
const format_1 = require("./format");
const init_1 = require("./init");
const util_1 = require("./util");
const CONSOLE_SPACING = ' '.repeat(3);
const warn = (title, message) => {
    const fancyTitle = format_1.FORMAT.HIGHLIGHT.WARN +
        ' ' +
        init_1.settings.programName +
        '_WARNING:' +
        colors_1.spacedReset +
        ' \n' +
        format_1.FORMAT.HIGHLIGHT.WARN +
        ' ' +
        title +
        colors_1.spacedReset;
    log(fancyTitle);
    log(message, true);
};
exports.warn = warn;
let bufferActive = false;
const logHold = async (promise) => {
    bufferActive = true;
    await promise;
    bufferActive = false;
    return (0, exports.writeLogBuffer)();
};
exports.logHold = logHold;
/**
 * log function
 * @param str
 */
const log = (str, noSpacing, bufferOverride) => {
    if (bufferActive && bufferOverride !== true)
        addToLogBuffer(str, noSpacing);
    else {
        const splitlines = str.split('\n');
        splitlines.forEach((line, i) => {
            if (line.length > init_1.settings.width) {
                splitlines.splice(i, 1, ...(0, exports.lineLimit)(line, init_1.settings.width));
            }
        });
        // str = splitlines.join('\n')
        // this is really hard to do accounting for escape characters...
        if (!noSpacing)
            str = CONSOLE_SPACING + str.replace(/\n/g, '\n' + CONSOLE_SPACING);
        if (cli_1.cli) {
            (0, readline_1.clearLine)(process.stdout, 0);
            (0, readline_1.cursorTo)(process.stdout, 0);
            console.log(str);
            cli_1.cli.prompt();
        }
        else
            console.log(str);
    }
};
exports.log = log;
const logBar = (style) => {
    let char = '';
    switch (style) {
        case 0:
            char = '┼';
            break;
        case 1:
            char = '─';
            break;
        case 2:
            char = '═';
            break;
        default:
            char = '+';
            break;
    }
    const str = format_1.FORMAT.MAJOR + char.repeat(init_1.settings.width) + colors_1.reset + '\n';
    (0, readline_1.clearLine)(process.stdout, 0);
    (0, readline_1.cursorTo)(process.stdout, 0);
    process.stdout.write(str);
    return str;
};
exports.logBar = logBar;
const initLogBuffer = [];
const addToLogBuffer = async (str, skipSpacing) => {
    initLogBuffer.push({
        message: str,
        skipSpacing: skipSpacing,
    });
};
exports.addToLogBuffer = addToLogBuffer;
const writeLogBuffer = async () => {
    for (; initLogBuffer.length > 0;) {
        const l = initLogBuffer.splice(0, 1)[0];
        await (0, util_1.sleep)(15);
        log(l.message, l.skipSpacing);
    }
};
exports.writeLogBuffer = writeLogBuffer;
const lineLimit = (line, width) => {
    const newLines = [];
    for (let i = 0, charsLength = line.length; i < charsLength; i += width)
        newLines.push(line.substring(i, i + width));
    return newLines;
};
exports.lineLimit = lineLimit;
