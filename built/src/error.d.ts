declare class Err extends Error {
    static count: number;
    constructor(title: string, message: string);
    log(bufferOverride?: boolean): void;
}
export { Err };
//# sourceMappingURL=error.d.ts.map