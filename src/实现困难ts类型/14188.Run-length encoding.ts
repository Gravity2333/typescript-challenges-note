export {};
// 给定一个字符串序列，比如：

// AAABCCXXXXXXY

// 需要你把它转换成 游程编码 (Run-Length Encoding, RLE) 的形式。
// 规则是：

// 连续重复的字母，写成 重复次数 + 字母

// 如果字母只出现一次，就直接写字母本身，不带次数。

// 所以：

// AAABCCXXXXXXY

// 会被编码成：

// 3AB2C6XY

// 然后你还需要写一个 解码器，把 3AB2C6XY 还原回原始字符串 AAABCCXXXXXXY。

type BuildTuple<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [...R, 1]>;

type Plus<
  A extends number,
  B extends number,
  ATuple extends any[] = BuildTuple<A>,
  BTuple extends any[] = BuildTuple<B>
> = [...ATuple, ...BTuple]["length"];

type CountSingleCharAndRemove<
  S extends string,
  T extends string,
  Counted extends string = "",
  Result extends number = 0
> = S extends `${infer F}${infer Rest}`
  ? F extends T
    ? CountSingleCharAndRemove<Rest, T, Counted, Plus<Result, 1> & number>
    : CountSingleCharAndRemove<Rest, T, `${Counted}${F}`, Result>
  : [Counted, Result];

// type t = CountSingleCharAndRemove<"AAABCCXXXXXXY","A">

type Encode<S extends string> = S extends `${infer F}${string}`
  ? CountSingleCharAndRemove<S, F> extends [
      infer Rest extends string,
      infer Cnt extends number
    ]
    ? Cnt extends 1
      ? `${F}${Encode<Rest>}`
      : `${Cnt}${F}${Encode<Rest>}`
    : never
  : "";

type t = Encode<"AAABCCXXXXXXY">;

type BuildSameLetterStr<
  S extends string,
  N extends number,
  Current extends number = 0
> = Current extends N
  ? ""
  : `${S}${BuildSameLetterStr<S, N, Plus<Current, 1> & number>}`;

// type b =BuildSameLetterStr<'a',3>

type Decode<S extends string> =
  S extends `${infer Cnt extends number}${infer Letter extends string}${infer Rest}`
    ? `${BuildSameLetterStr<Letter, Cnt>}${Decode<Rest>}`
    : S extends `${infer Letter extends string}${infer Rest}`
    ? `${Letter}${Decode<Rest>}`
    : "";

type d = Decode<"3AB2C6XY">;

type f = Decode<Encode<"AAABCCXXXXXXY">>;

type same = Decode<Encode<"AAABCCXXXXXXY">> extends "AAABCCXXXXXXY"
  ? true
  : false;
