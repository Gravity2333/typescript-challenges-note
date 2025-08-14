export = {};
// Implement the built-in ReturnType<T> generic without using it.

// For example

// const fn = (v: boolean) => {
//   if (v)
//     return 1
//   else
//     return 2
// }

// type a = MyReturnType<typeof fn> // should be "1 | 2"

type _ReturnType<F extends (...args: any[]) => any> = F extends (
  ...args: any[]
) => infer R
  ? R
  : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = _ReturnType<typeof fn>; // should be "1 | 2"
