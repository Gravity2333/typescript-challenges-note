import { type } from "os";

type MyPartial<T> = {
  [k in keyof T]?: T[k];
};

type MyRequired<T> = {
  [k in keyof T]-?: T[k];
};

type MyReadonly<T> = {
  readonly [k in keyof T]: T[k];
};

// const excluded: Exclude<{a: string,b: string},"3"> // "1"|"2"

// const extracted: Extract<'1'|'2'|'3',"3"> // "3"

type t = Exclude<{ a: string; b: string }, { b: string }>;

type t2 = "1" | "2" | "3" extends "1" ? 1 : 2;

type MyExclude<T, U> = T extends U ? never : T;
type MyExtract<T, U> = T extends U ? T : never;

type MyNonNullable<T> = MyExclude<T, null | undefined>;

type t3 = NonNullable<1 | 2 | 3 | null | undefined>; // 1 2 3

type t4 = null & {};

type fn = () => void;
type t5 = ReturnType<fn>; // void

type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: []
) => infer U
  ? U
  : any;
type t53 = MyReturnType<fn>; // void

type ArrItem<T extends any[]> = T extends (infer U)[] ? U : any;
type item = ArrItem<number[]>; // item

type PromiseItem<T extends Promise<any>> = T extends Promise<infer U> ? U : any;
type pitem = PromiseItem<
  Promise<{
    success: boolean;
    data: any;
  }>
>;

// {
//     success: boolean;
//     data: any;
// }

type MyRecord<K extends keyof any, T> = {
  [k in K]: T;
};

type MyPick<T, K extends keyof T> = {
    [k in K]: T[k]
}

type picked = MyPick<
  {
    user: string;
    age: number;
    gender: 0 | 1;
  },
  "age"|"gender"
>;

/**
 * {
    age: number;
    gender: 0 | 1;
}
 */

type MyOmit<T, K extends keyof T> = Pick<T, MyExclude<keyof T,K>>

type omitted = MyOmit<{
    user: string;
    age: number;
    gender: 0 | 1;
},"age"|"gender">

type ad= keyof any