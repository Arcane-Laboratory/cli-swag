"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jesterCommand = exports.jesterAnim = void 0;
const util_1 = require("./util");
const JESTER_SMUG = '       O\n      /~\\\n     /~~~\\\n    /~~~~~\\\n   (  ͡¬‿¬  )';
const JESTER_HAH = '       O\n      /~\\\n     /~~~\\\n    /~~~~~\\\n   (  ͡ᵔ́∀ᵔ̀  )';
const JESTER_DUM = '       O\n      /~\\\n     /~~~\\\n    /~~~~~\\\n   (  ͡´･ᗝ･`)';
const JESTER_LENNY = '       O\n      /~\\\n     /~~~\\\n    /~~~~~\\\n   (  ͡° ͜ʖ ͡°)';
const jesterAnim = async () => {
    await (0, util_1.sleep)(700);
    process.stdout.write(JESTER_SMUG);
    await (0, util_1.sleep)(500);
    process.stdout.write('\n   JESTER');
    await (0, util_1.sleep)(300);
    for (let i = 0; i < 3; i++) {
        process.stdout.write('?');
        await (0, util_1.sleep)(500);
    }
    await (0, util_1.sleep)(500);
    process.stdout.moveCursor(0, -5);
    process.stdout.cursorTo(0);
    process.stdout.write(JESTER_HAH);
    process.stdout.moveCursor(-10, 1);
    process.stdout.clearLine(0);
    process.stdout.write('HAH!');
    await (0, util_1.sleep)(1500);
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write('I hardly ');
    await (0, util_1.sleep)(600);
    process.stdout.moveCursor(0, -5);
    process.stdout.cursorTo(0);
    process.stdout.write(JESTER_DUM);
    process.stdout.moveCursor(-4, 1);
    process.stdout.write('KNOW');
    await (0, util_1.sleep)(700);
    process.stdout.write(' her!');
    await (0, util_1.sleep)(1000);
    process.stdout.moveCursor(0, -5);
    process.stdout.cursorTo(0);
    process.stdout.write(JESTER_LENNY);
    process.stdout.moveCursor(0, 1);
    process.stdout.cursorTo(0);
    process.stdout.write('\n');
    await (0, util_1.sleep)(1000);
};
exports.jesterAnim = jesterAnim;
exports.jesterCommand = {
    name: 'jester',
    description: 'summons the jester',
    callback: async () => {
        await (0, exports.jesterAnim)();
        return true;
    },
};
