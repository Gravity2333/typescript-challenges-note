export {};
// Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

// For example:

// type Result = Concat<[1], [2]> // expected to be [1, 2]

type Concat<Arr1 extends any[], Arr2 extends any[]> = [...Arr1, ...Arr2];

const tup = [3,4,5] as const
type Result = Concat<[1], [2, 3, 4]>; // expected to be [1, 2]
