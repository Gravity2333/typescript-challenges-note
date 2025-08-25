export {};
// 实现 Camelize 类型: 将对象属性名从 蛇形命名(下划线命名) 转换为 小驼峰命名

// Camelize<{
//   some_prop: string,
//   prop: { another_prop: string },
//   array: [{ snake_case: string }]
// }>

// // expected to be
// // {
// //   someProp: string,
// //   prop: { anotherProp: string },
// //   array: [{ snakeCase: string }]
// // }

type Camel<T extends string> =
  T extends `${infer F}_${infer SmallCase}${infer Rest}`
    ? `${F}${Uppercase<SmallCase>}${Camel<Rest>}`
    : T;

// type t = Camel<"some_prop">;
type Camelize<O extends Record<string, any>> = {
  [k in keyof O as Camel<k & string>]: O[k] extends Array<any>
    ? {
        [i in Exclude<keyof O[k], keyof []>]: Camelize<O[k][i]>;
      }
    : O[k] extends object
    ? Camelize<O[k]>
    : O[k];
};

type Expand<T> = T extends infer O
  ? {
      [K in keyof O]: O[K] extends object ? Expand<O[K]> : O[K];
    }
  : never;

type t1 = Expand<
  Camelize<{
    some_prop: string;
    prop: { another_prop: string };
    array: [{ snake_case: string }, { snake_2_case: symbol }];
  }>
>;


