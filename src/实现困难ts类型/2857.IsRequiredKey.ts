export {};
// Implement a generic IsRequiredKey<T, K> that return whether K are required keys of T .

// For example

// type A = IsRequiredKey<{ a: number, b?: string },'a'> // true
// type B = IsRequiredKey<{ a: number, b?: string },'b'> // false
// type C = IsRequiredKey<{ a: number, b?: string },'b' | 'a'> // false

// 原理 type aa = {a?: 1} extends {a: 1}? true: false

type IsRequiredKey<O extends Record<string, any>, T extends keyof O> = Pick<
  O,
  T
> extends Required<{ [k in T]: O[k] }>
  ? true
  : false;

type IsRequiredKey2<O extends Record<string, any>, T extends keyof O> = {
  [k in T]: O[k];
} extends Required<{ [k in T]: O[k] }>
  ? true
  : false;

type A = IsRequiredKey2<{ a: number; b?: string }, "a">; // true
type B = IsRequiredKey2<{ a: number; b?: string }, "b">; // false
type C = IsRequiredKey<{ a: number; b?: string }, "b" | "a">; // false

type aa = { a: number; b?: string } extends { a: number } ? true : false;

type ttt = Pick<{ a?: number }, "a">;

// type MyPick<T, K extends string> = {
//   [P in K]: T[P];
// };
// type ttt2 = MyPick<{ a?: number }, "a">;
