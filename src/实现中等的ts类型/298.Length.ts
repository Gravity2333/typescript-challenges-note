export = {};
// Compute the length of a string literal, which behaves like String#length.
// 思路 转换成数组计算

// 在 TypeScript 的 模板字面量类型匹配里，

// S extends `${infer First}${infer Rest}`


// First 只占字符串的第一个字符

// Rest 占剩下的所有字符（可以是空字符串）

// 换句话说，模板字面量匹配是左贪婪的：

type StrLen<S extends string, StrArr extends any[] = []> = S extends `${infer First}${infer Rest}`? 
StrLen<Rest,[...StrArr,First]>: StrArr['length']

type strLen = StrLen<"hello   world ">;
