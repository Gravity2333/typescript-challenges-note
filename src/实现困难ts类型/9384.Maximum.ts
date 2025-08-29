export {};
// Description
// Implement the type Maximum, which takes an input type T, and returns the maximum value in T.

// If T is an empty array, it returns never. Negative numbers are not considered.

// For example:

// Maximum<[]> // never
// Maximum<[0, 2, 1]> // 2
// Maximum<[1, 20, 200, 150]> // 200
// Advanced
// Can you implement type Minimum inspired by Maximum?

type BuildTuple<
  N extends number,
  R extends number[] = []
> = R["length"] extends N ? R : BuildTuple<N, [...R, 1]>;

type MoreThan<A extends number, B extends number> = BuildTuple<A> extends [
  ...BuildTuple<B>,
  ...any[]
]
  ? true
  : false;

type Maximum<Arr extends number[], Max extends number = Arr[0]> = Arr extends [
  infer F extends number,
  ...infer Rest extends number[]
]
  ? MoreThan<F, Max> extends true
    ? Maximum<Rest, F>
    : Maximum<Rest, Max>
  : Max;

type t1 = Maximum<[]>; // never
type t2 = Maximum<[0, 2, 1]>; // 2
type t3 = Maximum<[1, 20, 200, 150]>; // 200
