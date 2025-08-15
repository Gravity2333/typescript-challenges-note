export = {};
// 实现EndsWith<T, U>,接收两个string类型参数,然后判断T是否以U结尾,根据结果返回true或false

// 例如:

// type a = EndsWith<'abc', 'bc'> // expected to be true
// type b = EndsWith<'abc', 'abc'> // expected to be true
// type c = EndsWith<'abc', 'd'> // expected to be false

type EndsWith<
  S extends string,
  Suffix extends string
> = S extends `${string}${Suffix}` ? true : false;


type a = EndsWith<'abc', 'bc'> // expected to be true
type b = EndsWith<'abc', 'abc'> // expected to be true
type c = EndsWith<'abc', 'd'> // expected to be false
