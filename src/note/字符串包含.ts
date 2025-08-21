export {};

type StrIncludes<
  S extends string,
  T extends string
> = S extends `${string}${T}${string}` ? true : false;

type t = StrIncludes<"Hello world", "lo">
