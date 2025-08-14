export declare function classDescriptor(description: string): (target: new (...args: any[]) => object) => void;
export declare function propDescription(description: string): (target: any, propName: string) => void;
export declare function printObj(obj: any): void;
export declare function paramDescription(target: any, fnName: string, index: number): void;
