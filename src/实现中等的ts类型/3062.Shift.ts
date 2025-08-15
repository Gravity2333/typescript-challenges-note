export = {};
// Implement the type version of Array.shift

// For example

// type Result = Shift<[3, 2, 1]> // [2, 1]

type Shift<Arr extends any[]> = Arr extends [any, ...infer Rest] ? Rest : Arr;

type Result = Shift<[3, 2, 1]>; // [2, 1]
