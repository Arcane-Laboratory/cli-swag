declare const underscore = "\u001B[4m";
declare const blink = "\u001B[5m";
declare const reverse = "\u001B[7m";
declare const hidden = "\u001B[8m";
declare const reset = "\u001B[0m";
declare const spacedReset: string;
declare enum TEXT_COLOR {
    black = "\u001B[30m",
    red = "\u001B[31m",
    green = "\u001B[32m",
    yellow = "\u001B[33m",
    blue = "\u001B[34m",
    magenta = "\u001B[35m",
    cyan = "\u001B[36m",
    white = "\u001B[37m",
    reset = "\u001B[0m",
    bright = "\u001B[1m",
    dim = "\u001B[30m"
}
declare enum HIGHLIGHT_COLOR {
    BGblack = "\u001B[40m",
    BGred = "\u001B[41m",
    BGgreen = "\u001B[42m",
    BGyellow = "\u001B[43m",
    BGblue = "\u001B[44m",
    BGmagenta = "\u001B[45m",
    BGcyan = "\u001B[46m",
    BGwhite = "\u001B[47m"
}
export { TEXT_COLOR, HIGHLIGHT_COLOR, underscore, hidden, blink, reverse, reset, spacedReset, };
//# sourceMappingURL=colors.d.ts.map