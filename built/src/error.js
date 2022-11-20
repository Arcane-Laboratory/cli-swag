"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Err = void 0;
const colors_1 = require("./colors");
const format_1 = require("./format");
const init_1 = require("./init");
const log_1 = require("./log");
class Err extends Error {
    constructor(title, message) {
        const fancyTitle = format_1.FORMAT.HIGHLIGHT.ERROR +
            ' ' +
            init_1.settings.programName +
            '_ERROR:' +
            colors_1.spacedReset +
            ' \n' +
            format_1.FORMAT.HIGHLIGHT.ERROR +
            ' ' +
            title +
            colors_1.spacedReset;
        super('\n' + message);
        this.title = title;
        this.message = message;
        this.name = fancyTitle.trim();
        Err.count++;
    }
    log(bufferOverride) {
        (0, log_1.log)('', false, bufferOverride);
        (0, log_1.log)(this.name + ': ' + this.message.trim(), true, bufferOverride);
    }
}
exports.Err = Err;
Err.count = 0;
