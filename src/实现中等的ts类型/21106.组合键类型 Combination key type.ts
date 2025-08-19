export {};
// 组合键类型 Combination key type 中等
// by Nauxscript @Nauxscript

// 接受挑战    English

// 把多个修饰键两两组合，但不可以出现相同的修饰键组合。
// 提供的 ModifierKeys 中，前面的值比后面的值高，即 cmd ctrl 是可以的，但 ctrl cmd 是不允许的。

type Combination<Arr extends readonly string[]> = Arr extends [
  infer F extends string,
  ...infer Rest extends string[]
]
  ? F | `${F} ${Combination<Rest>}` | Combination<Rest>
  : never;

//结果联合类型
type KeyCombo = Combination< ["cmd", "ctrl", "opt", "shift"] >;
