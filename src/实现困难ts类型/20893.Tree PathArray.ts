export {};

// 你要在 TypeScript 类型层面 定义一个类型 Path，它能表示一个对象树里的 合法路径。

// 路径的形式是一个数组，数组里的每一项就是对象的 key，表示逐层进入对象。

// 给的例子：

// declare const example: {
//     foo: {
//         bar: {
//             a: string;
//         };
//         baz: {
//             b: number
//             c: number
//         }
//     };
// }

// 那么从这个对象 example 出发，所有可能的合法路径有：

// [] 👉 空路径（表示根本没走进去）

// ['foo'] 👉 进入第一层的 foo

// ['foo', 'bar'] 👉 从 foo 进入 bar

// ['foo', 'bar', 'a']👉 从 foo.bar 进入 a

// ['foo', 'baz'] 👉 从 foo 进入 baz

// ['foo', 'baz', 'b']👉 从 foo.baz 进入 b

// ['foo', 'baz', 'c']👉 从 foo.baz 进入 c

declare const example: {
  foo: {
    bar: {
      a: string;
    };
    baz: {
      b: number;
      c: number;
    };
  };
};

type FindPaths<
  T extends Record<string, any>,
  Key = keyof T
> = Key extends string
  ? T[Key] extends object
    ? [] | [Key] | [Key, ...FindPaths<T[Key]>]
    : [] | [Key]
  : never;

type t = FindPaths<typeof example>;
