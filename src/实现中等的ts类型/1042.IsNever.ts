export = {}

/**
 * Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.

For example:

type A = IsNever<never> // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false
 * 
 */



type _IsNever<T> = T extends never ? true : false;

type a = _IsNever<never> // a 是 never
/**
 * 
 * 复习，对于 裸的范型， ts会启用分配律，将联合类型中的每个单独运算
 * 对于 never，ts会认为是空的联合类型，不会进行任何运算 直接返回 never 而不是期待的 true
 * 所以，需要加入 [] 来避开这个特性
 */


type IsNever<T> = [T] extends [never]? true: false
type a1 = IsNever<never> // a 是 true