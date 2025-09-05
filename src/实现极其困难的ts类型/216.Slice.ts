export = {};
// Slice extreme #array
// by Anthony Fu @antfu

// Take the Challenge

// Implement the JavaScript Array.slice function in the type system. Slice<Arr, Start, End> takes the three argument. The output should be a subarray of Arr from index Start to End. Indexes with negative numbers should be counted from reversely.

// For example

// type Arr = [1, 2, 3, 4, 5]
// type Result = Slice<Arr, 2, 4> // expected to be [3, 4]

type BuildTuple<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [...R, 1]>;

// >=
type MoreThan<A extends number, B extends number> = BuildTuple<A> extends [
  ...BuildTuple<B>,
  ...any[]
]
  ? true
  : false;
// <=
type LessThan<A extends number, B extends number> = BuildTuple<B> extends [
  ...BuildTuple<A>,
  ...any[]
]
  ? true
  : false;

type Slice<
  Arr extends any[],
  Start extends number,
  End extends number,
  Current extends any[] = [],
  R extends any[] = []
> = MoreThan<Current["length"], Start> extends true
  ? LessThan<[...Current, 1]["length"], End> extends true
    ? Slice<Arr, Start, End, [...Current, 1], [...R, Arr[Current["length"]]]>
    : R
  : Slice<Arr, Start, End, [...Current, 1], [...R]>;

type t = Slice<[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 3, 7>;
