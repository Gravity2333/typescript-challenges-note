export {};
// Required Keys hard #utils
// by yituan @yi-tuan

// Take the Challenge    简体中文 日本語

// Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.

// For example

// type Result = RequiredKeys<{ foo: number; bar?: string }>;
// // expected to be “foo”

type RequiredKeys<
  O extends Record<string, any>,
  keysUnion extends keyof O = keyof O
> = keysUnion extends string | number | symbol
  ? undefined extends O[keysUnion]
    ? never
    : keysUnion
  : never;

type Result = RequiredKeys<{ foo: number; bar?: string }>;
// expected to be “foo”
