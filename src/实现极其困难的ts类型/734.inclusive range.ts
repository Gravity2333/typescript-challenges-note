export = {};
// 背景

// TypeScript 的类型系统有递归深度限制（大概在 45 层左右）。

// 一般我们在做类似 生成数字范围、构造数组、递归计算 的类型时，很容易超过这个限制。

// 这里题目的范围是 0 ~ 200，显然超过了单次递归能处理的深度。

// 题目要求

// 给定两个边界：

// Lower（下界）

// Higher（上界）

// 需要在 类型层面 生成一个表示区间 [Lower, Higher] 的元组（tuple）。

// 比如：

// Range<2, 5>
// // => [2, 3, 4, 5]

// 并且要求：

// 当 Lower > Higher 时，返回空元组 []。

// 难点

// 如果你用普通递归（比如 Range<2, 200>），会超过 TypeScript 递归深度限制（45）。
// 因此需要 发明一种“更深的递归技巧”，通常思路有：

// 分块递归（例如一次递归 10 个或 20 个）。

// 基于二分拆解（divide and conquer，减少递归层数）。

// 预生成大范围数字表，再做切片。

type BuildTuple<N extends number, R extends any[] = []> = [
  ...R,
  1,
  1,
  1,
  1,
  1
]["length"] extends N
  ? [
      ...R,
      R["length"],
      [...R, 1]["length"],
      [...R, 1, 1]["length"],
      [...R, 1, 1, 1]["length"],
      [...R, 1, 1, 1, 1]["length"],
      [...R, 1, 1, 1, 1, 1]["length"]
    ]
  : [...R, 1, 1, 1, 1]["length"] extends N
  ? [
      ...R,
      R["length"],
      [...R, 1]["length"],
      [...R, 1, 1]["length"],
      [...R, 1, 1, 1]["length"],
      [...R, 1, 1, 1, 1]["length"]
    ]
  : [...R, 1, 1, 1]["length"] extends N
  ? [
      ...R,
      R["length"],
      [...R, 1]["length"],
      [...R, 1, 1]["length"],
      [...R, 1, 1, 1]["length"]
    ]
  : [...R, 1, 1]["length"] extends N
  ? [...R, R["length"], [...R, 1]["length"], [...R, 1, 1]["length"]]
  : [...R, 1]["length"] extends N
  ? [...R, R["length"], [...R, 1]["length"]]
  : [R]["length"] extends N
  ? R
  : BuildTuple<N, [...R, R["length"]]>;

// type r = BuildTuple<100>;

  type Range<Start extends number, End extends number> = BuildTuple<End> extends [
    ...BuildTuple<Start>,
    ...infer Range
  ]
    ? Range
    : [];

  type r = Range<3,2>;
