import { COLOR } from './colors';
import { cliColorLayout } from './init';
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
declare const enableColoredLogs: (color: COLOR) => void;
declare const colorCallout: (string: string | number) => string;
declare const colorHighlight: (string: string | number) => string;
declare const colorMajor: (string: string | number) => string;
declare const colorMinor: (string: string | number) => string;
export { cliColorLayout, enableColoredLogs, CHECK, colorCallout, colorHighlight, colorMajor, colorMinor, FORMAT, };
//# sourceMappingURL=format.d.ts.map