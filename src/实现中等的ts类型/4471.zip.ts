export { }

// In This Challenge, You should implement a type Zip<T, U>, T and U must be Tuple

// type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]

type Zip<T extends any[], U extends any[], Result extends [any, any][] = []> = T['length'] extends U['length'] ?
    T extends [infer TFirst, ...infer TRest] ?
    U extends [infer UFirst, ...infer URest] ?
    Zip<TRest, URest, [...Result, [TFirst, UFirst]]> :
    Result : Result
    : "T,U 长度必须一致！"

type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
