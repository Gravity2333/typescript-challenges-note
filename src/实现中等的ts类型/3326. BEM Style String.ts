export {};

// BEM（Block, Element, Modifier）方法论是 CSS 中一种很流行的类名命名规范。

// Block（块）：组件的整体部分，比如 btn

// Element（元素）：依赖于 Block 的子部分，用 __ 连接，比如 btn__price

// Modifier（修饰符）：改变 Block 或 Element 样式的部分，用 -- 连接，比如 btn--big 或 btn__price--warning

// 题目要求你实现一个类型 BEM<B, E, M>：

// B 是一个字符串字面量类型（Block 名）

// E 是一个字符串数组类型（元素名，可以为空）

// M 是一个字符串数组类型（修饰符，可以为空）

// 返回值是 这些参数组合出来的类名的字符串字面量联合类型。

type BEM<
  Block extends string,
  Elements extends string[],
  Modifier extends string[],
  UnionElem extends string = Elements[number],
  UnionModifier extends string = Modifier[number]
> = `${Block}__${UnionElem extends UnionElem
  ? UnionElem
  : ""}--${UnionModifier extends UnionModifier ? UnionModifier : ""}`;

type T = BEM<"btn", ["price", "submit", "delete"], ["big", "warning"]>;
//"btn__price--big" | "btn__price--warning" | "btn__submit--big" | "btn__submit--warning" | "btn__delete--big" | "btn__delete--warning"
