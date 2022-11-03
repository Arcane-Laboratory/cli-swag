declare const warn: (title: string, message: string) => void;
declare const error: (title: string, message: string) => void;
declare const logHold: (promise: Promise<any>) => Promise<void>;
/**
 * log function
 * @param str
 */
declare const log: (str: string, noSpacing?: boolean) => void;
declare const logBar: (style: number) => string;
declare const addToLogBuffer: (str: string, skipSpacing?: boolean) => Promise<void>;
export declare const writeLogBuffer: () => Promise<void>;
export { warn, error, log, logBar, addToLogBuffer, logHold };
//# sourceMappingURL=log.d.ts.map