export {};
// Given a number, your type should return its square.

type BuildTuple<N extends number, R extends any[] = []> = R['length'] extends N
  ? R
  : BuildTuple<N, [...R, 1]>;

type Square<
  N extends number,
  Len extends 1[] = BuildTuple<N>,
  Index extends 1[] = Len,
  Result extends 1[] = []
> = Index extends [1, ...infer Rest extends 1[]]
  ? Square<N, Len, Rest, [...Result, ...Len]>
  : Result["length"];

type t  = Square<16>