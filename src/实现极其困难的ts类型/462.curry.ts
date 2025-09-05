export = {};

// But in our daily life, currying dynamic arguments is also commonly used, for example, the Function.bind(this, [...params]) API.

// const func = (a: number, b: number, c: number) => {
//   return a + b + c
// }

// const bindFunc = func(null, 1, 2)

// const result = bindFunc(3) // result: 6
// Thus, based on Currying 1, we would need to have the dynamic argument version:

// const add = (a: number, b: number, c: number) => a + b + c
// const three = add(1, 1, 1)

// const curriedAdd = DynamicParamsCurrying(add)
// const six = curriedAdd(1, 2, 3)
// const seven = curriedAdd(1, 2)(4)
// const nine = curriedAdd(2)(3)(4)
// In this challenge, DynamicParamsCurrying may take a function with zero to multiple arguments, you need to correctly type it. The returned function may accept at least one argument. When all the arguments as satisfied, it should yield the return type of the original function correctly.

type CurryReturns<Fn extends (...args: any[]) => any> = Fn extends (
  ...args: infer Args
) => infer ReturnValue
  ? Args["length"] extends 0
    ? ReturnValue
    : Args["length"] extends 1
    ? (arg: Args[0]) => ReturnValue
    : Args extends [infer F, ...infer Rest]
    ? (arg: F) => CurryReturns<(...args: Rest) => ReturnValue>
    : never
  : never;

interface Curry {
  <Fn extends (...args: any[]) => any>(fn: Fn): CurryReturns<Fn>;
}

const curry: Curry = (fn) => {
  const params: any[] = [];
  const paramLen = fn?.length || 0;
  const _curry = (p: any) => {
    params.push(p);
    if (params.length === paramLen) {
      return fn(...params);
    } else {
      return _curry as any;
    }
  };
  return _curry as any;
};

const func = (a: number, b: string, c: boolean) => {
  return a + b + c;
};
const curried = curry(func);
const curried2 = curried(1);
const curried3 = curried2("2");
const res = curried3(true);
