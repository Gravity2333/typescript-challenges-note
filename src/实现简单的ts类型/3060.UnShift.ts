// Implement the type version of Array.unshift

// For example:

// type Result = Unshift<[1, 2], 0> // [0, 1, 2]

type Unshift<Arr extends any[], Item> = [Item,...Arr]
type Result = Unshift<[1, 2], 0> // [0, 1, 2]
