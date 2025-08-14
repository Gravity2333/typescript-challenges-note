export = {};
// In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

// For example:

// type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

type Flatten<Arr extends any[], Result extends any[] = []> = Arr extends [
  infer First,
  ...infer Rest
]
  ? First extends Array<any>
    ? Flatten<Rest, [...Result, ...Flatten<First>]>
    : Flatten<Rest, [...Result, First]>
  : Result;

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
