declare const a = "sdhguashdua";
declare const b: typeof a;
declare class User {
    name: string;
    age: number;
    constructor();
    sayHello(): void;
}
type Obj = {
    [k in keyof User]: Obj[k];
};
