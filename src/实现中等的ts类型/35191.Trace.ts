export {};
// The trace of a square matrix is the sum of the elements on its main diagonal. However, it's difficult to calculate the sum with type system. To make things simple, let's return the elements on the main diagonal with union type.

// For example:

// type Arr = [
//   [1,2],
//   [3,4]
// ]
// type Test = Trace<Arr> // expected to be 1 | 4

type BuildTuple<N extends number, R extends 1[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [...R, 1]>;

type Trace<
  Arr extends any[],
  CurrentIndex extends 1[] = [],
  Result = never
> = CurrentIndex["length"] extends Arr["length"]
  ? Result
  : Trace<
      Arr,
      [...CurrentIndex, 1],
      Result | Arr[CurrentIndex["length"]][CurrentIndex["length"]]
    >;

type Arr = [[1, 2], [3, 4]];
type Test = Trace<Arr>; // 1 | 4

type Arr2 = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];
type Test2 = Trace<Arr2>; // 'a' | 'e' | 'i'
