export {};
// Implement a type, UnionToTuple, that converts a union to a tuple.

// As we know, union is an unordered structure, but tuple is an ordered, which implies that we are not supposed to preassume any order will be preserved between terms of one union, when unions are created or transformed.

// Hence in this challenge, any permutation of the elements in the output tuple is acceptable.

// Your type should resolve to one of the following two types, but NOT a union of them!

// UnionToTuple<1>           // [1], and correct
// UnionToTuple<'any' | 'a'> // ['any','a'], and correct
// or

// UnionToTuple<'any' | 'a'> // ['a','any'], and correct
// It shouldn't be a union of all acceptable tuples...

// UnionToTuple<'any' | 'a'> // ['a','any'] | ['any','a'], which is incorrect
// And a union could collapes, which means some types could absorb (or be absorbed by) others and there is no way to prevent this absorption. See the following examples:

// Equal<UnionToTuple<any | 'a'>,       UnionToTuple<any>>         // will always be a true
// Equal<UnionToTuple<unknown | 'a'>,   UnionToTuple<unknown>>     // will always be a true
// Equal<UnionToTuple<never | 'a'>,     UnionToTuple<'a'>>         // will always be a true
// Equal<UnionToTuple<'a' | 'a' | 'a'>, UnionToTuple<'a'>>         // will always be a true

/**
 * Union 无顺序 Tuple有顺序 由于分配律的存在，会产生多种结果，为了取得一种结果 我们需要选其中的一种！
 * Union => Intersection  Intersection => 其中一个
 */

// 利用函数参数的逆变特性
type UnionToIntersection<Union extends any> = (
  Union extends any ? (args: Union) => 1 : never
) extends (args: infer I) => 1
  ? I
  : never;

// 多个函数的交叉类型 会被当成 重载，infer推断的时候会采用最后一个
type LastOfIntersecrtionFn<T> = T extends (arg: infer I) => 1 ? I : never;

type t2 = LastOfIntersecrtionFn<
  UnionToIntersection<
    ((arg: { a: 1 }) => 1) | ((arg: { b: 2 }) => 1) | ((arg: { c: 3 }) => 1)
  >
>;

type LastUnion<T> = (T extends any ? (arg: T) => 1 : never) extends infer F
  ? LastOfIntersecrtionFn<UnionToIntersection<F>>
  : never;

type UnionToTuple<T, Last = LastUnion<T>> = [T] extends [never]
  ? []
  : [...UnionToTuple<Exclude<T, Last>>, Last];

//   type t6 = LastUnion<  { a: 1 }| {b: 2 }| { c:3 }>
type t4 = UnionToTuple<1>; // [1], and correct
type t5 = UnionToTuple<"any" | "a">; // ['any','a'], and correct
