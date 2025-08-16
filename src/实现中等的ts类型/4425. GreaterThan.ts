export { }

// In This Challenge, You should implement a type GreaterThan<T, U> like T > U

// Negative numbers do not need to be considered.

// For example

// GreaterThan<2, 1> //should be true
// GreaterThan<1, 1> //should be false
// GreaterThan<10, 100> //should be false
// GreaterThan<111, 11> //should be true

type BuildTuple<N extends number, Result extends any[] = []> = 
Result['length'] extends N ? Result : BuildTuple<N,[
    ...Result, 1
]>

type GreaterThan<T extends number, K extends number,
    TList extends number[] = BuildTuple<T>,
    KList extends number[] = BuildTuple<K>> = KList extends [...TList, ...any[]] ? false : true

type result1 = GreaterThan<2, 1> //should be true
type result2 = GreaterThan<1, 1> //should be false
type result3 = GreaterThan<10, 100> //should be false
type result4 = GreaterThan<111, 11> //should be true
