export {}
// Implement a generic Fibonacci<T> that takes a number T and returns its corresponding Fibonacci number.

// The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// For example

// type Result1 = Fibonacci<3> // 2
// type Result2 = Fibonacci<8> // 21

type Fibonacci<N extends number, List extends number[] = [1],CurrentMinus2 extends any[] = [],CurrentMinus1 extends any[] = [1]> = 
List['length'] extends N ? List: 
Fibonacci<N,[...List,[...CurrentMinus2,...CurrentMinus1]['length']],CurrentMinus1,[...CurrentMinus2,...CurrentMinus1]>

type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
