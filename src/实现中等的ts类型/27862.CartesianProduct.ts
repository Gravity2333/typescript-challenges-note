export {}
// Given 2 sets (unions), return its Cartesian product in a set of tuples, e.g.

// CartesianProduct<1 | 2, 'a' | 'b'> 
// // [1, 'a'] | [2, 'a'] | [1, 'b'] | [2, 'b']

type CartesianProduct<A,B> = A extends any? B extends any? [A,B]: never:never

type res = CartesianProduct<1 | 2, 'a' | 'b'> 