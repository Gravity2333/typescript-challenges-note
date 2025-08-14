export {}
/**
 * Implement a generic First<T> that takes an Array T and returns its first element's type.

For example:

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
 */

type First<Arr extends any[]> = Arr[0];

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

// 如何判断数组是不是空
type ArrEmpty<Arr extends any[]> = Arr["length"] extends 0 ? true : false;
type res = ArrEmpty<[]>;

// 方法2
type First2<Arr extends any[]> = ArrEmpty<Arr> extends true ? never : Arr[0];
type head2_1 = First2<arr1>; // expected to be 'a'
type head2_2 = First2<arr2>; // expected to be 3

// 方法3 infer
type First3<Arr extends any[]> = Arr extends [infer A, ...rest: any[]]
  ? A
  : never;

type head3_1 = First3<arr1>; // expected to be 'a'
type head3_2 = First3<arr2>; // expected to be 3
