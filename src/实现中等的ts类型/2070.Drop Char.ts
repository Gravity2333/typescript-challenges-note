export = {};

// 从字符串中剔除指定字符。

// 例如：

// type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

type DropChar<
  Str extends string,
  R extends string,
  Result extends string = ""
> = Str extends `${infer First}${infer Rest}`
  ? First extends R
    ? DropChar<Rest, R, `${Result}`>
    : DropChar<Rest, R, `${Result}${First}`>
  : Result;

type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'
