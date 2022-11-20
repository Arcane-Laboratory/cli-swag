declare const warn: (title: string, message: string) => void;
declare let bufferActive: boolean;
declare let bufferPromise: Promise<any>;
declare const logHold: (promise: Promise<any>) => Promise<void>;
/**
 * log function
 * @param str
 */
declare const log: (str: string, noSpacing?: boolean, bufferOverride?: boolean) => void;
declare const logBar: (style: number) => string;
declare const addToLogBuffer: (str: string, skipSpacing?: boolean) => Promise<void>;
export declare const writeLogBuffer: () => Promise<void>;
export declare const lineLimit: (line: string, width: any) => Array<string>;
export { warn, log, logBar, addToLogBuffer, logHold, bufferActive, bufferPromise, };
//# sourceMappingURL=log.d.ts.map