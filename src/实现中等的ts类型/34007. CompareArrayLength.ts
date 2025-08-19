export {};
// CompareArrayLength

// Implement CompareArrayLength to compare two array length(T & U).

// If length of T array is greater than U, return 1; If length of U array is greater than T, return -1; If length of T array is equal to U, return 0.
type BuildTuple<N extends number, R extends 1[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [...R, 1]>;

type CompareArrayLength<
  Arr1 extends any[],
  Arr2 extends any[],
  Arr1Len extends 1[] = BuildTuple<Arr1["length"]>,
  Arr2Len extends 1[] = BuildTuple<Arr2["length"]>
> = Arr1Len extends Arr2Len ? 0 : Arr1Len extends [...Arr2Len, ...any] ? 1 : -1;

type tt = CompareArrayLength<[1,2],[3,4]>

type tt2 = CompareArrayLength<[1,2,1],[3,4]>

type tt3 = CompareArrayLength<[1,2],[3,4,5]>
