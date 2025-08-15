// by Anthony Fu @antfu

// 接受挑战    English 日本語

// 在此挑战中建议使用TypeScript 4.0

// 柯里化 是一种将带有多个参数的函数转换为每个带有一个参数的函数序列的技术。

// 例如：

// const add = (a: number, b: number) => a + b
// const three = add(1, 2)

// const curriedAdd = Currying(add)
// const five = curriedAdd(2)(3)
// 传递给 Currying 的函数可能有多个参数，您需要正确输入它的类型。

// 在此挑战中，柯里化后的函数每次仅接受一个参数。接受完所有参数后，它应返回其结果。


type CurryReturns<Fn> = Fn extends (...args: infer Arguments) => infer Return
  ? // 如果参数列表为空，直接返回R
    Arguments['length'] extends 0
    ? Return
    : // 多个参数 直接返回R
    Arguments extends [infer Arg, ...infer Rest]
    ? (arg_0: Arg) => CurryReturns<(...args: Rest) => Return>
    : never
  : never;

export declare function curry<Fn extends (...args: any[]) => any>(
  fn: Fn
): CurryReturns<Fn>;

const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = curry(add)
const five = curriedAdd(2)(3)