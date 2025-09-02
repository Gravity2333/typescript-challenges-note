export = {};
// Sometimes when working with numeric literals, we need to rule out (or enforce) that the provided number is a positive integer.

// To do that, we first need a way to tell if the number is negative.

// Write a type-level function IsNegativeNumber that accepts a number N and returns:

// true if N is negative
// false if N is positive
// false if N is 0,
// never if N is number
// never if N is a union

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : never;

type IsNegativeNumber<N extends number> = IsUnion<N> extends true
  ? never
  : Equal<N, number> extends true
  ? never
  : `${N}` extends `-${infer Abs extends number}`
  ? Abs extends 0
    ? false
    : true
  : false;

type t1 = IsNegativeNumber<-1>;
type t2 = IsNegativeNumber<1>;
type t3 = IsNegativeNumber<0>;
type t4 = IsNegativeNumber<-0>;
type t5 = IsNegativeNumber<number>;
type t6 = IsNegativeNumber<-1 | -2 | -3 | -1>;

type sd = IsUnion<1 | 2>;
type aaa = [1 | 2 | 3] extends [1] ? 1 : 0;

type TEST<T extends number> = [T] extends any ? [T] : never;

type t = TEST<1 | 2 | 3>;
