export = {};
// 实现泛型GetReadonlyKeys<T>，GetReadonlyKeys<T>返回由对象 T 所有只读属性的键组成的联合类型。

// 例如

// interface Todo {
//   readonly title: string
//   readonly description: string
//   completed: boolean
// }

// type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;
/** 借助神奇的精确Equal */

type GetReadonlyKeys<
  O extends Record<string, any>,
  Key extends keyof O = keyof O
> = Key extends any
  ? Equal<{ [k in Key]: O[k] }, { -readonly [k in Key]: O[k] }> extends true
    ? never
    : Key
  : never;

interface Todo {
  readonly title: string;
  readonly description: string;
  completed: boolean;
}

type Keys = GetReadonlyKeys<Todo>; // expected to be "title" | "description"

