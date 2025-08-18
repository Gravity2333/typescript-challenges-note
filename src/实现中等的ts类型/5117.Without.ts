export {};

// Implement the type version of Lodash.without, Without<T, U> takes an Array T, number or array U and returns an Array without the elements of U.

// type Res = Without<[1, 2], 1>; // expected to be [2]
// type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
// type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

type Without<
  Arr extends any[],
  E,
  ExceptedUnion = E extends any[] ? E[number] : E,
  Result extends any[] = []
> = Arr extends [infer F, ...infer Rest]
  ? F extends ExceptedUnion
    ? Without<Rest, E, ExceptedUnion, [...Result]>
    : Without<Rest, E, ExceptedUnion, [...Result, F]>
  : Result;

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
