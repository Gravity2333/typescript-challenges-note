export {};
// Implement the advanced util type MutableKeys, which picks all the mutable (not readonly) keys into a union.

// For example:

// type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
// // expected to be “bar”

type StrictEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
// myEuqal 必须保证完全一致 包括readonly

type MutableKeys<
  O extends Record<string, any>,
  Key extends keyof O = keyof O
> = Key extends any
  ? StrictEqual<Pick<O, Key>, Readonly<Pick<O, Key>>> extends true
    ? Key
    : never
  : never;
