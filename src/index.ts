/**
 * ts challenge
 * https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md
 * 打开这个网址 开始挑战！
 */

type UnionToIntersection<U> = (U extends any ? (a: U) => void : never) extends (
  a: infer I
) => void
  ? I
  : never;

type r = UnionToIntersection<{ a: number } | { b: string } | { c: symbol }>;

interface fn {
  (a: { a: number; b: string }): void;
}

type fn2 = (a: { a: number; b: string }) => void;
const sonFN = (a: { a: number }) => {};
const fn: fn = sonFN;

const res = { a: 100 } as const;

type ReadonlyTest = {
  -readonly [k in 1 | 2 | 3]-?: any;
};

type ReadonlyDeep<T> = {
  readonly [P in keyof T]: T[P] extends object ? Readonly<T[P]> : T[P];
};

type Expand<T extends Record<string, any>> = T extends infer O
  ? {
      [k in keyof O]: O[k] extends object ? Expand<O[k]> : O[k];
    }
  : never;

type R = Expand<
  ReadonlyDeep<{
    a: {
      b: number;
    };
  }>
>;

type A = { a: number };
type B = Expand<{ b: A }>;
const o = 1;
type C = typeof o;
type D = keyof 1;

const arr: readonly any[] = [];
function FN<T>() {}
type Callback<T> =(item: T,index: number) => void;
type Foreach = <Item>(list: Item[], callback: Callback<Item>) => void;

declare const foreach: Foreach;

foreach([1,23,4,5,'haha'],(item,index)=>{})
const a= Math.random()
export = a