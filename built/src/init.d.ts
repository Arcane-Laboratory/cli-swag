import { COLOR, HIGHLIGHT, TEXT } from './colors';
import { command } from './command';
interface cliSettings {
    color?: COLOR | false;
    width?: number;
    prompt?: string;
    promptConfirm?: string;
    promptReject?: string;
    programName?: string;
}
interface cliSettingsFull {
    color: COLOR | false;
    width: number;
    prompt: string;
    promptConfirm: string;
    promptReject: string;
    programName: string;
}
interface cliColorLayout {
    DEFAULT: TEXT;
    MAJOR: TEXT;
    MINOR: TEXT;
    HIGHLIGHT: {
        DEFAULT: HIGHLIGHT;
        MAJOR: HIGHLIGHT;
        WARN?: HIGHLIGHT;
        ERROR?: HIGHLIGHT;
    };
}
declare let settings: cliSettingsFull;
declare const initializeCLI: (userSettings: cliSettings, commands?: Array<command>) => void;
export { initializeCLI, settings, cliSettings, cliColorLayout };
//# sourceMappingURL=init.d.ts.map