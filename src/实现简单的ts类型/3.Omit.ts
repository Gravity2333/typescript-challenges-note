export {}
/**
 * 不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。

Omit 会创建一个省略 K 中字段的 T 对象。

例如：

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
 */ 4;

type _Omit<T, K extends keyof T> = {
  [k in Exclude<keyof T, K>]: T[k];
};

type OmitResult = _Omit<
  {
    name: string;
    age: number;
    gender: "male" | "female";
  },
  "name"
>;


type OmitResult2 = _Omit<
  1,
  "toExponential"
>;

// res: type OmitResult2 = {
//     toString: (radix?: number) => string;
//     toFixed: (fractionDigits?: number) => string;
//     toPrecision: (precision?: number) => string;
//     valueOf: () => number;
//     toLocaleString: {
//         (locales?: string | string[], options?: Intl.NumberFormatOptions): string;
//         (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
//     };
// }
