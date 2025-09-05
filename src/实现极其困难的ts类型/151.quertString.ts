import { Key } from "readline";

export = {};
// 你需要实现一个 类型级别的解析器，用于将 URL 查询字符串（query string）解析为一个对象字面量类型。

// 详细要求如下：

// 查询字符串中某个键的值可以省略，但仍然需要被解析为 true。
// 例如：'key' 没有值，但解析结果应该是 { key: true }。

// 重复的键必须合并为一个键。

// 如果同一个键出现了不同的值，这些值必须合并为一个 元组类型。

// 如果一个键只有一个值，则该值 不能 包裹在元组类型里。

// 如果同一个键的相同值出现多次，只算一次。
// 例如：key=value&key=value 应当只解析为 key=value，不会重复。

// 示例 1：无值键
// type Result = ParseQuery<'key'>;
// // 解析结果：
// /*
// {
//   key: true
// }
// */

// 说明：key 没有值，所以被解析为 true。

// 示例 2：单个键值对
// type Result = ParseQuery<'a=1'>;
// // 解析结果：
// /*
// {
//   a: '1'
// }
// */

// 说明：只有一个值，不需要用元组包裹。

// 示例 3：重复键，不同值
// type Result = ParseQuery<'a=1&a=2'>;
// // 解析结果：
// /*
// {
//   a: ['1', '2']
// }
// */

// 说明：同一个键出现了不同值，所以合并为元组。

// 示例 4：重复键，相同值
// type Result = ParseQuery<'a=1&a=1'>;
// // 解析结果：
// /*
// {
//   a: '1'
// }
// */

// 说明：重复值只算一次，所以仍然是单值，不用元组。

// 示例 5：混合键
// type Result = ParseQuery<'a=1&b&c=2&c=3&c=2'>;
// /*
// {
//   a: '1',
//   b: true,
//   c: ['2', '3']
// }
// */

// a=1 → 单值

// b → 没有值 → true

// c=2&c=3&c=2 → 去重并合并 → ['2', '3']

type Expand<O extends Record<string, any>> = O extends infer I
  ? { [k in keyof I]: I[k] extends object ? Expand<I[k]> : I[k] }
  : never;

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

type Include<Arr extends any[], T> = Arr extends [infer F, ...infer Rest]
  ? Equal<T, F> extends true
    ? true
    : Include<Rest, T>
  : false;

type MergeToRecord<
  O extends Record<string, any>,
  Key extends string,
  Value
> = Expand<
  Key extends keyof O
    ? O[Key] extends Array<any>
      ? Omit<O, Key> & {
          [k in Key]: Include<O[k], Value> extends true
            ? O[k]
            : [...O[k], Value];
        }
      : Omit<O, Key> & {
          [k in Key]: Equal<O[k], Value> extends true ? O[k] : [O[k], Value];
        }
    : Omit<O, Key> & { [k in Key]: Value }
>;

// type r1 =  MergeToRecord<MergeToRecord<MergeToRecord< MergeToRecord<{},'a','1'>,'a','2'>,'b','3'>,'b','3'>

type ParseQuery<
  S extends string,
  R extends Record<string, any> = {}
> = S extends `${infer Param}&${infer Rest}`
  ? Param extends `${infer Key}=${infer Value}`
    ? ParseQuery<Rest, MergeToRecord<R, Key, Value>>
    : ParseQuery<Rest, MergeToRecord<R, Param, true>>
  : S extends `${infer Param}`
  ? Param extends `${infer Key}=${infer Value}`
    ? MergeToRecord<R, Key, Value>
    : MergeToRecord<R, Param, true>
  : R;

//   : R;
// 示例 1：无值键
type Result = ParseQuery<"key">;
// 解析结果：
/*
{
  key: true
}
*/

// 说明：key 没有值，所以被解析为 true。

// 示例 2：单个键值对
type Result2 = ParseQuery<"a=1">;
// 解析结果：
/*
{
  a: '1'
}
*/

// 说明：只有一个值，不需要用元组包裹。

// 示例 3：重复键，不同值
type Result3 = ParseQuery<"a=1&a=2">;
// 解析结果：
/*
{
  a: ['1', '2']
}
*/

// 说明：同一个键出现了不同值，所以合并为元组。

// 示例 4：重复键，相同值
type Resul4 = ParseQuery<"a=1&a=1">;
// 解析结果：
/*
{
  a: '1'
}
*/

// 说明：重复值只算一次，所以仍然是单值，不用元组。

// 示例 5：混合键
type Result5 = ParseQuery<"a=1&b&c=2&c=3&c=2">;
/*
{
  a: '1',
  b: true,
  c: ['2', '3']
}
*/
