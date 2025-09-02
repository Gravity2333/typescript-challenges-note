export = {};
// 我们如何实现一个类型，用来“拆箱”（unbox）以下几类类型：数组、函数、Promise 和元组？

// 示例：

// Unbox<string>             // 结果是 string
// Unbox<() => number>       // 结果是 number
// Unbox<boolean[]>           // 结果是 boolean
// Unbox<Promise<boolean>>    // 结果是 boolean

// 额外挑战：能否把它做成 递归拆箱？

// Unbox<() => () => () => () => number>  // 结果是 number

// 更进一步：能否控制递归深度？

// Unbox<() => () => () => () => number, 3>  // 结果是 () => number

// 也就是说：

// 普通类型保持不变

// 函数类型返回值、数组元素类型、Promise 包装类型都要被拆出来

// 可以递归拆多层

// 可选地限制递归层数

type Unbox<T> = T extends object
  ? T extends () => infer Inner
    ? Inner
    : T extends (infer Inner)[]
    ? Inner
    : T extends Promise<infer Inner>
    ? Inner
    : T
  : T;

type t1 = Unbox<string>; // 结果是 string
type t2 = Unbox<() => number>; // 结果是 number
type t3 = Unbox<boolean[]>; // 结果是 boolean
type t4 = Unbox<Promise<boolean>>; // 结果是 boolean

type UnboxEnhanced<T> = T extends object
  ? (
      T extends () => infer Inner
        ? Inner
        : T extends (infer Inner)[]
        ? Inner
        : T extends Promise<infer Inner>
        ? Inner
        : T
    ) extends infer I
    ? UnboxEnhanced<I>
    : never
  : T;

type t5 = UnboxEnhanced<() => () => () => () => number>;

type UnboxEnhancedWithLayer<
  T,
  Layer extends number,
  Current extends any[] = []
> = Current["length"] extends Layer
  ? T
  : T extends object
  ? (
      T extends () => infer Inner
        ? Inner
        : T extends (infer Inner)[]
        ? Inner
        : T extends Promise<infer Inner>
        ? Inner
        : T
    ) extends infer I
    ? UnboxEnhancedWithLayer<I, Layer, [...Current, 1]>
    : never
  : T;

type t6 = UnboxEnhancedWithLayer<() => () => () => () => number, 3>;
