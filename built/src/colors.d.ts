declare const underscore = "\u001B[4m";
declare const blink = "\u001B[5m";
declare const reverse = "\u001B[7m";
declare const hidden = "\u001B[8m";
declare const reset = "\u001B[0m";
declare const spacedReset: string;
declare type COLOR = 'BLACK' | 'RED' | 'GREEN' | 'YELLOW' | 'ORANGE' | 'BLUE' | 'MAGENTA' | 'CYAN' | 'WHITE';
declare enum TEXT {
    BLACK = "\u001B[30m",
    RED = "\u001B[31m",
    GREEN = "\u001B[32m",
    YELLOW = "\u001B[33m",
    ORANGE = "\x0033[38; 5; 202m",
    BLUE = "\u001B[34m",
    MAGENTA = "\u001B[35m",
    CYAN = "\u001B[36m",
    WHITE = "\u001B[37m",
    reset = "\u001B[0m",
    bright = "\u001B[1m",
    dim = "\u001B[30m"
}
declare enum HIGHLIGHT {
    BLACK = "\u001B[40m",
    RED = "\u001B[41m",
    GREEN = "\u001B[42m",
    YELLOW = "\u001B[43m",
    ORANGE = "\x0033[48; 5; 202m",
    BLUE = "\u001B[44m",
    MAGENTA = "\u001B[45m",
    CYAN = "\u001B[46m",
    WHITE = "\u001B[47m"
}
export { COLOR, TEXT, HIGHLIGHT, underscore, hidden, blink, reverse, reset, spacedReset, };
//# sourceMappingURL=colors.d.ts.map