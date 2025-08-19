export {};
// Implement type CheckRepeatedChars<T> which will return whether type T contains duplicated member

// For example:

// type CheckRepeatedTuple<[1, 2, 3]>   // false
// type CheckRepeatedTuple<[1, 2, 1]>   // true

type Includes<Arr extends any[], T> = Arr extends [infer F, ...infer Rest]
  ? F extends T
    ? true
    : Includes<Rest, T>
  : false;

type CheckRepeatedTuple<Arr extends any[]> = Arr extends [
  infer F,
  ...infer Rest
]
  ? Includes<Rest, F> extends true
    ? true
    : CheckRepeatedTuple<Rest>
  : false;

type t1 = CheckRepeatedTuple<[1, 2, 3]>; // false
type t2 = CheckRepeatedTuple<[1, 2, 1]>; // true
