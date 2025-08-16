export { }
// Do you know lodash? Chunk is a very useful function in it, now let's implement it. Chunk<T, N> accepts two required type parameters, the T must be a tuple, and the N must be an integer >=1

// type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
// type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
// type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]

type ExtractPreNElem<Arr extends any[], N extends number, Extracted extends any[] = []> =
Extracted['length'] extends N ?
    [Extracted, Arr] : Arr extends [infer First, ...infer Rest] ?
    ExtractPreNElem<Rest, N, [...Extracted, First]> : [Extracted, Arr]

type Chunk<Arr extends any[], N extends number,Result extends any[][] = [],Extracted extends [any[],any[]] = ExtractPreNElem<Arr,N>> = 
Arr['length'] extends 0 ? Result: Chunk<Extracted[1],N,[...Result, Extracted[0]]>

type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
