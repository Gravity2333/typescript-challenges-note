export = {};

// 实现StartsWith<T, U>,接收两个string类型参数,然后判断T是否以U开头,根据结果返回true或false

// 例如:

// type a = StartsWith<'abc', 'ac'> // expected to be false
// type b = StartsWith<'abc', 'ab'> // expected to be true
// type c = StartsWith<'abc', 'abcd'> // expected to be false

type StartsWith<
  S extends string,
  P extends string
> = S extends `${P}${infer Rest}` ? true : false;

type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false
