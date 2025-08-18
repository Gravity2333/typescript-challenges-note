export {};
// Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.

// type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
// type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
// type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1

type IndexOf<Arr extends any[], T, Result extends number[] = []> = Arr extends [
  infer F,
  ...infer Rest
]
  ? F extends T
    ? Result["length"]
    : IndexOf<Rest, T, [...Result, 1]>
  : -1;

type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
