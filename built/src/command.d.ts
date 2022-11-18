interface command {
    name: string;
    aliases?: Array<string>;
    callback: (...args: Array<any>) => Promise<any>;
    description?: string;
    minArgs?: number;
    maxArgs?: number;
}
declare const usageInfo: (command: command) => string;
declare const commands: Array<command>;
declare const addCommand: (command: command) => void;
declare const addCommands: (commandArray: Array<command>) => void;
export { command, commands, usageInfo, addCommand, addCommands };
//# sourceMappingURL=command.d.ts.map