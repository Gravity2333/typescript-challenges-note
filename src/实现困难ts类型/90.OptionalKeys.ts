export {}
// Optional Keys hard #utils
// by yituan @yi-tuan

// Take the Challenge    简体中文 日本語

// Implement the advanced util type OptionalKeys<T>, which picks all the optional keys into a union.

type OptionalKeys<
  O extends Record<string, any>,
  keysUnion extends keyof O = keyof O
> = keysUnion extends string | number | symbol
  ? undefined extends O[keysUnion]
    ? keysUnion
    : never
  : never;