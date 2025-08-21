export {};
// Convert a string literal to a number, which behaves like Number.parseInt.

type Trunc<S extends string> = S extends `${infer Integer}.${string}`
  ? Integer
  : S;

type ParseInt<
  S extends string,
  T extends string = Trunc<S>
> = T extends `${infer F extends number}` ? F : never;

type t = ParseInt<"122.3">;
