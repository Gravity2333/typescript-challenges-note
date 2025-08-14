export {};

// 实现一个泛型Pop<T>，它接受一个数组T，并返回一个由数组T的前 N-1 项（N 为数组T的长度）以相同的顺序组成的数组。

// 例如

// type arr1 = ['a', 'b', 'c', 'd']
// type arr2 = [3, 2, 1]

// type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
// type re2 = Pop<arr2> // expected to be [3, 2]
// 额外：同样，您也可以实现Shift，Push和Unshift吗？

type Pop<Arr extends any[]> = Arr extends [...infer poped, infer last]
  ? poped
  : never;

type arr1 = ["a", "b", "c", "d"];
type arr2 = [3, 2, 1];

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]
