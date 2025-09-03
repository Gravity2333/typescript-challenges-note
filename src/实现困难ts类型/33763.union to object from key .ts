export = {};
// Find the object containing the key in the union type by the key. It takes two parameters: a union of object types and a key name.
// 需求

// 我们有一个联合类型：

type A = { id: number; name: string };
type B = { id: number; age: number };
type C = { title: string };

type Union = A | B | C;

type Expand<O extends Record<string, any>> = O extends infer I
  ? {
      [k in keyof O]: O[k] extends object ? Expand<O[k]> : O[k];
    }
  : never;

// 现在我们要做一个类型工具：

// type FindByKey<U, K> = ...;

// 它能在 Union 里找到 包含指定 key 的对象类型。

// 示例
// type T1 = FindByKey<Union, "name">;  // { id: number; name: string }
// type T2 = FindByKey<Union, "age">;   // { id: number; age: number }
// type T3 = FindByKey<Union, "title">; // { title: string }
// type T4 = FindByKey<Union, "foo">;   // never （因为没有对象包含 foo）

type FindByKey<
  Obj extends Record<string, any>,
  Key extends string
> = Obj extends any ? (Key extends keyof Obj ? Obj : never) : never;

type T1 = FindByKey<Union, "name">; // { id: number; name: string }
type T2 = FindByKey<Union, "age">; // { id: number; age: number }
type T3 = FindByKey<Union, "title">; // { title: string }
type T4 = FindByKey<Union, "foo">; // never （因为没有对象包含 foo）

type a = keyof A | keyof B;
