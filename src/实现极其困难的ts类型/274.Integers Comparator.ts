export = {};
// enum Comparison {
//     Greater,
//     Equal,
//     Lower,
//   }

//   // 你要实现的类型
//   type Compare<A extends number, B extends number> = any;
//   使用示例：

//   ts
//   Copy code
//   type C1 = Compare<3, 2>;   // 应该是 Comparison.Greater
//   type C2 = Compare<5, 5>;   // 应该是 Comparison.Equal
//   type C3 = Compare<-1, 2>;  // 应该是 Comparison.Lower
//   type C4 = Compare<0, -7>;  // 应该是 Comparison.Greater
//   type C5 = Compare<-3, -3>; // 应该是 Comparison.Equal
//   type C6 = Compare<-10, -2>;// 应该是 Comparison.Lower
//   👉 换句话说，你要写的 Compare<A, B> 类型，要能在 类型层级 正确判断 A 和 B 的大小关系，并返回 Comparison 枚举的成员。

enum Comparison {
  Greater,
  Equal,
  Lower,
}

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

type BuildTuple<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [...R, 1]>;

// >=
type MoreThan<A extends number, B extends number> = BuildTuple<A> extends [
  ...BuildTuple<B>,
  ...any[]
]
  ? true
  : false;

type Compare<A extends number, B extends number> = Equal<A, B> extends true
  ? Comparison.Equal
  : `${A}` extends `-${infer A_ABS extends number}`
  ? `${B}` extends `-${infer B_ABS extends number}`
    ? MoreThan<A_ABS, B_ABS> extends true
      ? Comparison.Lower
      : Comparison.Greater
    : Comparison.Lower
  : `${B}` extends `-${infer B_ABS extends number}`
  ? Comparison.Greater
  : MoreThan<A, B> extends true
  ? Comparison.Greater
  : Comparison.Lower;

type C1 = Compare<3, 2>; // 应该是 Comparison.Greater
type C2 = Compare<5, 5>; // 应该是 Comparison.Equal
type C3 = Compare<-1, 2>; // 应该是 Comparison.Lower
type C4 = Compare<0, -7>; // 应该是 Comparison.Greater
type C5 = Compare<-3, -3>; // 应该是 Comparison.Equal
type C6 = Compare<-10, -2>; // 应该是 Comparison.Lower
