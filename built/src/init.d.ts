import { HIGHLIGHT_COLOR, TEXT_COLOR } from './colors';
interface cliSettings {
    format?: cliColorLayout;
    width?: number;
    prompt?: string;
    promptConfirm?: string;
    promptReject?: string;
    programName?: string;
}
interface cliColorLayout {
    DEFAULT: TEXT_COLOR;
    MAJOR: TEXT_COLOR;
    MINOR: TEXT_COLOR;
    HIGHLIGHT: {
        DEFAULT: HIGHLIGHT_COLOR;
        MAJOR: HIGHLIGHT_COLOR;
        WARN?: HIGHLIGHT_COLOR;
        ERROR?: HIGHLIGHT_COLOR;
    };
}
declare let settings: {
    format: cliColorLayout;
    width: number;
    colorLog: boolean;
    prompt: string;
    promptConfirm: string;
    promptReject: string;
    programName: string;
};
declare const initializeCLI: (userSettings: cliSettings) => void;
export { initializeCLI, settings, cliSettings, cliColorLayout };
//# sourceMappingURL=init.d.ts.map