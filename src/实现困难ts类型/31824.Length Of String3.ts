export {};
// 实现一个类型 LengthOfString<S>，功能类似于 数组的 length 属性：

// 它接收一个字符串字面量类型 S，返回该字符串的长度（作为类型的数字字面量）。

// 与之前两个关于字符串长度的挑战不同，这次 需要支持长度大约 10^6 的字符串，这会更具挑战性。

// 换句话说，就是：

// 给定一个类型为字符串字面量 S，生成一个对应的数字类型，表示这个字符串的长度，而且要能处理非常长的字符串。

type LengthOfString<
  S extends string,
  R extends any[] = []
> = S extends `${string}${string}${string}${string}${string}${string}${string}${string}${string}${string}${infer Rest}`
  ? LengthOfString<Rest, [...R, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]>
  : S extends `${string}${string}${string}${string}${string}${string}${string}${string}${string}${infer Rest}`
  ? LengthOfString<Rest, [...R, 1, 1, 1, 1, 1, 1, 1, 1, 1]>
  : S extends `${string}${string}${string}${string}${string}${string}${string}${string}${infer Rest}`
  ? LengthOfString<Rest, [...R, 1, 1, 1, 1, 1, 1, 1, 1]>
  : S extends `${string}${string}${string}${string}${string}${string}${string}${infer Rest}`
  ? LengthOfString<Rest, [...R, 1, 1, 1, 1, 1, 1, 1]>
  : S extends `${string}${string}${string}${string}${string}${string}${infer Rest}`
  ? LengthOfString<Rest, [...R, 1, 1, 1, 1, 1, 1]>
  : S extends `${string}${string}${string}${string}${string}${infer Rest}`
  ? LengthOfString<Rest, [...R, 1, 1, 1, 1, 1]>
  : S extends `${string}${string}${string}${string}${infer Rest}`
  ? LengthOfString<Rest, [...R, 1, 1, 1, 1]>
  : S extends `${string}${string}${string}${infer Rest}`
  ? LengthOfString<Rest, [...R, 1, 1, 1]>
  : S extends `${string}${string}${infer Rest}`
  ? LengthOfString<Rest, [...R, 1, 1]>
  : S extends `${string}${infer Rest}`
  ? LengthOfString<Rest, [...R, 1]>
  : R["length"];

type long =
  LengthOfString<"hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world">;
