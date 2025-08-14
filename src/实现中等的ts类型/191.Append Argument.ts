export = {};
// For given function type Fn, and any type A (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take Fn as the first argument, A as the second, and will produce function type G which will be the same as Fn but with appended argument A as a last one.

// For example,

// type Fn = (a: number, b: string) => number

// type Result = AppendArgument<Fn, boolean>
// // expected be (a: number, b: string, x: boolean) => number
// This question is ported from the original article by @maciejsikora

type AppendArgument<Fn extends (...args: any[]) => any, appended> = Fn extends (
  ...args: infer P
) => infer R
  ? (...args: [...P, appended]) => R
  : Fn;

type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
