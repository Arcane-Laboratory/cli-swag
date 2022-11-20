declare class Err extends Error {
    title: string;
    message: string;
    static count: number;
    constructor(title: string, message: string);
    log(bufferOverride?: boolean): void;
}
export { Err };
//# sourceMappingURL=error.d.ts.map