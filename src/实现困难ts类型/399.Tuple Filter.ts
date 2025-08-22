export {}
// Implement a type FilterOut<T, F> that filters out items of the given type F from the tuple T.

// For example,

// type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]
// 比较函数签名 时，TS 会检查两个函数对所有输入的表现是否相同。

// T extends A ? 1 : 2 这里就是“对任意输入 T，看它在 A 和 B 里的结果是否一致”。
type Equal<A,B> = (<T>()=>T extends A ? 1 : 2) extends (<T>()=>T extends B ? 1 : 2)? true: false

type FilterOut<Arr extends any[], T> = Arr extends [infer F,...infer Rest]? Equal<F,T> extends true? [...FilterOut<Rest,T>]:[
    F,...FilterOut<Rest,T>
]: []

type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]