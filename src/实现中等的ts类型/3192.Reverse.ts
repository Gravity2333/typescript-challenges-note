
// 实现类型版本的数组反转 Array.reverse

// 例如：

// type a = Reverse<['a', 'b']> // ['b', 'a']
// type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

export type Reverse<Arr extends any[], Result extends any[] = []> = Arr extends [
  infer First,
  ...infer Rest
]
  ? Reverse<Rest, [First, ...Result]>
  : Result;

type a = Reverse<["a", "b"]>; // ['b', 'a']
type b = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']
