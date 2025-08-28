export {};
// Implement the type version of Lodash.intersection with a little difference. Intersection takes an Array T containing several arrays or any type element including the union type, and returns a new union containing all intersection elements.

// type Res = Intersection<[[1, 2], [2, 3], [2, 2]]>; // expected to be 2
// type Res1 = Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>; // expected to be 2 | 3
// type Res2 = Intersection<[[1, 2], [3, 4], [5, 6]]>; // expected to be never
// type Res3 = Intersection<[[1, 2, 3], [2, 3, 4], 3]>; // expected to be 3
// type Res4 = Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>; // expected to be 2 | 3
// type Res5 = Intersection<[[1, 2, 3], 2, 3]>; // expected to be never

type FlatTuple<Arr extends any[]> = Arr extends [infer F, ...infer Rest]
  ? F extends Array<any>
    ? [...FlatTuple<F>, ...FlatTuple<Rest>]
    : [F, ...FlatTuple<Rest>]
  : [];

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

type Include<Arr extends any[], T> = Arr extends [infer F, ...infer Rest]
  ? Equal<F, T> extends true
    ? true
    : Include<Rest, T>
  : false;

type Intersection<
  Arr extends any[],
  Result extends any[] = [],
  Flatted extends any[] = FlatTuple<Arr>
> = Flatted extends [infer F, ...infer Rest]
  ? Include<Rest, F> extends true
    ? Intersection<Rest, [...Result, F]>
    : Intersection<Rest, [...Result]>
  : Result[number];

type Res = Intersection<[[1, 2], [2, 3], [2, 2]]>; // expected to be 2
type Res1 = Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>; // expected to be 2 | 3
type Res2 = Intersection<[[1, 2], [3, 4], [5, 6]]>; // expected to be never
type Res3 = Intersection<[[1, 2, 3], [2, 3, 4], 3]>; // expected to be 3
type Res4 = Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>; // expected to be 2 | 3
type Res5 = Intersection<[[1, 2, 3], 2, 3]>; // expected to be never
