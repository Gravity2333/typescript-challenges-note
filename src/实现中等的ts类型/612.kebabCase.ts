export = {};
// Replace the camelCase or PascalCase string with kebab-case.

// FooBarBaz -> foo-bar-baz

// For example

// type FooBarBaz = KebabCase<"FooBarBaz">
// const foobarbaz: FooBarBaz = "foo-bar-baz"

// type DoNothing = KebabCase<"do-nothing">
// const doNothing: DoNothing = "do-nothing"

// KebabCase（烤肉串命名法）是一种字符串命名风格：
// 所有字母都为 小写，单词之间用 连字符（-） 分隔。

// 比如：

// 普通写法	KebabCase 写法
// helloWorld	hello-world
// FooBarBaz	foo-bar-baz
// some_value	some-value

type TupleToStr<T extends string[], Result extends string = ""> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends string | number | bigint | boolean
    ? Rest extends string[]
      ? TupleToStr<Rest, `${Result}${First}`>
      : never
    : never
  : Result;

type KebabCase<
  S extends string,
  Result extends string[] = []
> = S extends `${infer First}${infer Rest}`
  ? First extends Uppercase<First> & Exclude<First, "-">
    ? KebabCase<
        Rest,
        [
          ...Result,
          ...(Result["length"] extends 0
            ? [Lowercase<First>]
            : Result extends [...infer Prefix, "-"]
            ? [Lowercase<First>]
            : ["-", Lowercase<First>])
        ]
      >
    : KebabCase<Rest, [...Result, First]>
  : TupleToStr<Result>;

type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";

type t232 = TupleToStr<["d", "o", "-"]>;


// niubi
type KebabCase2<S extends string> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
  ? `${Uncapitalize<S1>}${KebabCase<S2>}`
  : `${Uncapitalize<S1>}-${KebabCase<S2>}`
  : S;