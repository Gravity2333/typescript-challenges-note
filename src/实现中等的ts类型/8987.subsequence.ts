export {};
// Given an array of unique elements, return all possible subsequences.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

// For example:

// type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]

type Subsequence<Arr extends any[]> = Arr extends [infer F, ...infer Rest]
  ? [F] | [F, ...Subsequence<Rest>] | Subsequence<Rest>
  : [];

type A = Subsequence<[1, 2]>; // [] | [1] | [2] | [1, 2]
