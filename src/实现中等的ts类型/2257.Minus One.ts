export = {}
// 给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。

// 例如:

// type Zero = MinusOne<1> // 0
// type FiftyFour = MinusOne<55> // 54

type GetLengthedTuple<N extends number,Result extends any[]= []> = Result['length'] extends N ? Result: GetLengthedTuple<N,[...Result,Result['length']]>
// type t = GetLengthedTuple<54>
type MinusOne<N extends number, T extends any[] = GetLengthedTuple<N>> = T extends [any,...infer Rest]?Rest['length']:never

type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
