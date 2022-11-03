import { cliColorLayout } from './init';
declare const coloredLogs = true;
declare let CHECK: string;
declare let FORMAT: {
    DEFAULT: string;
    MAJOR: string;
    MINOR: string;
    HIGHLIGHT: {
        DEFAULT: string;
        MAJOR: string;
        WARN: string;
        ERROR: string;
    };
};
declare const enableColoredLogs: (format: cliColorLayout) => void;
export { cliColorLayout, enableColoredLogs, coloredLogs, FORMAT, CHECK };
//# sourceMappingURL=format.d.ts.map