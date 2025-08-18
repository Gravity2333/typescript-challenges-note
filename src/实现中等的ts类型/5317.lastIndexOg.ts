export {};
// mplement the type version of Array.lastIndexOf, LastIndexOf<T, U> takes an Array T, any U and returns the index of the last U in Array T

// For example:

// type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
// type Res2 = LastIndexOf<[0, 0, 0], 2> // -1

type BuildTuple<
  N extends number,
  R extends number[] = []
> = R["length"] extends N
  ? R extends [...infer Rest, 1]
    ? Rest
    : never
  : BuildTuple<N, [...R, 1]>;

type LastIndexOf<
  Arr extends any[],
  T,
  Index extends any[] = BuildTuple<Arr["length"]>
> = Arr extends [...infer Rest, infer Last]
  ? Last extends T
    ? Index["length"]
    : Index extends [...infer IndexRest, any]
    ? LastIndexOf<Rest, T, [...IndexRest]>
    : -1
  : -1;

type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type Res2 = LastIndexOf<[0, 0, 0], 2>; // -1
