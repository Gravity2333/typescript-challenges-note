export {}
// Implement a generic Fibonacci<T> that takes a number T and returns its corresponding Fibonacci number.

// The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// For example

// type Result1 = Fibonacci<3> // 2
// type Result2 = Fibonacci<8> // 21

type Fibonacci<N extends number, List extends number[] = [0]> = 
List['length'] extends N ? List: 
N extends 1? 1:
N extends 2? 1:
Fibonacci<List['length'],[]>