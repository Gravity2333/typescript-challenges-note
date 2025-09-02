export = {};

// 实现一个类型 BinaryAdd，用来 将两个二进制数相加。

// 要求：

// 输入的二进制数都是字符串字面量类型，例如 '1010'、'0111'。

// 整个计算过程必须保持二进制，不能在中途把二进制转换成十进制或者其他数字类型。

// 输入的两个二进制字符串 长度总是相同。

// 也就是说，你要在类型系统里实现二进制的逐位相加，包括进位操作。

type BuildTuple<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [1, ...R]>;

type Reverse<S extends string> = S extends `${infer F}${infer Rest}`
  ? `${Reverse<Rest>}${F}`
  : "";

type BinaryAdd<
  A extends string,
  B extends string,
  ReversedA extends string = Reverse<A>,
  ReversedB extends string = Reverse<B>,
  R extends any[] = [],
  Step extends any[] = BuildTuple<1>
> = ReversedA extends `${infer FA}${infer RestA extends string}`
  ? ReversedB extends `${infer FB}${infer RestB extends string}`
    ? BinaryAdd<
        "",
        "",
        RestA,
        RestB,
        [
          ...R,
          ...(FA extends "1" ? Step : []),
          ...(FB extends "1" ? Step : [])
        ],
        [...Step, ...Step]
      >
    : BinaryAdd<
        "",
        "",
        RestA,
        "",
        [...R, ...(FA extends "1" ? Step : [])],
        [...Step, ...Step]
      >
  : ReversedB extends `${infer FB}${infer RestB extends string}`
  ? BinaryAdd<
      "",
      "",
      "",
      RestB,
      [...R, ...(FB extends "1" ? Step : [])],
      [...Step, ...Step]
    >
  : R["length"];

type t = BinaryAdd<"11", "001">;
