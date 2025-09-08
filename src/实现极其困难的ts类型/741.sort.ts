export = {};
// In this challenge, you are required to sort natural number arrays in either ascend order or descent order.

// Ascend order examples:

// Sort<[]> // []
// Sort<[1]> // [1]
// Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]> //  [2, 4, 5, 6, 6, 6, 7, 8, 9]
// The Sort type should also accept a boolean type. When it is true, the sorted result should be in descent order. Some examples:

// Sort<[3, 2, 1], true> // [3, 2, 1]
// Sort<[3, 2, 0, 1, 0, 0, 0], true> // [3, 2, 1, 0, 0, 0, 0]
// Extra challenges:

// Support natural numbers with 15+ digits.
// Support float numbers.

type BuildTuple<
  N extends number,
  Result extends any[] = []
> = Result["length"] extends N ? Result : BuildTuple<N, [...Result, 1]>;

type MoreThan<A extends number, B extends number> = BuildTuple<A> extends [
  ...BuildTuple<B>,
  ...any[]
]
  ? true
  : false;

type Bubble<Arr extends number[], Current extends any[] = []> = Arr extends [
  infer A extends number,
  infer B extends number,
  ...infer Rest extends number[]
]
  ? MoreThan<A, B> extends true
    ? Bubble<[A, ...Rest], [...Current, B]>
    : Bubble<[B, ...Rest], [...Current, A]>
  : [...Current, Arr[0]];

type Sort<
  Arr extends number[],
  Reverse extends boolean = false,
  Sorted extends number[] = []
> = Bubble<Arr> extends [...infer R extends number[], infer Max extends number]
  ? Sort<R, Reverse, Reverse extends true ? [...Sorted, Max] : [Max, ...Sorted]>
  : Sorted;

type a = Sort<[]>; // []
type b = Sort<[1]>; // [1]
type c = Sort<[2, 4, 5, 6, 6, 6, 7, 8, 9]>; //  [2, 4, 5, 6, 6, 6, 7, 8, 9]

type r1 = Sort<[3, 2, 1], true>; // [3, 2, 1]
type r2 = Sort<[3, 2, 0, 1, 0, 0, 0], true>; // [3, 2, 1, 0, 0, 0, 0]
