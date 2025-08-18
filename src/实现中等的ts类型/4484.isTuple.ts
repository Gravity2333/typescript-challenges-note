export { }
// Implement a type IsTuple, which takes an input type T and returns whether T is tuple type.

// For example:

// type case1 = IsTuple<[number]> // true
// type case2 = IsTuple<readonly [number]> // true
// type case3 = IsTuple<number[]> // false


type IsTuple<Arr extends readonly any[]> = number extends Arr['length'] ? false : true

type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false

type c = [1,2,34,56,7] extends [...infer F,...infer R]? [F,R]: false