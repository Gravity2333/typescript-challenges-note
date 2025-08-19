export {};
// return true is a number is odd

type BuildTuple<N extends number, R extends 1[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [...R, 1]>;

type IsOdd<N extends number, T extends 1[] = BuildTuple<N>> = N extends 0
  ? false
  : N extends 1
  ? true
  : N extends 2
  ? false
  : T extends [1, 1, ...infer Rest extends 1[]]
  ? IsOdd<Rest['length'], Rest>
  : false;
  
  type t = IsOdd<4>