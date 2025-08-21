export {};
// C 语言中有一个函数：printf。这个函数允许我们以格式化的方式输出内容。例如：

// printf("The result is %d.", 42);

// 这个挑战要求你 解析输入字符串，并提取出格式占位符，比如 %d 和 %f。

// 举例来说，如果输入字符串是 "The result is %d."，那么解析结果应该是一个元组（或数组）：

// ['dec']

// 下面是占位符与类型的映射关系：

// type ControlsMap = {
//   c: 'char',     // 字符
//   s: 'string',   // 字符串
//   d: 'dec',      // 十进制整数
//   o: 'oct',      // 八进制
//   h: 'hex',      // 十六进制
//   f: 'float',    // 浮点数
//   p: 'pointer',  // 指针
// }

type ControlsMap = {
  c: "char"; // 字符
  s: "string"; // 字符串
  d: "dec"; // 十进制整数
  o: "oct"; // 八进制
  h: "hex"; // 十六进制
  f: "float"; // 浮点数
  p: "pointer"; // 指针
};

type ExtractPrintf<
  S extends string,
  R extends string[] = []
> = S extends `${string}%${infer MaybeControl}${infer Rest}`
  ? MaybeControl extends keyof ControlsMap
    ? ExtractPrintf<Rest, [...R, ControlsMap[MaybeControl]]>
    : ExtractPrintf<Rest, [...R]>
  : R;

type e = ExtractPrintf<`printf("The result is %d.", 42)`>; //["dec"]
type e2 = ExtractPrintf<`printf("The result is %f.%d", 42)`>; //["float", "dec"]