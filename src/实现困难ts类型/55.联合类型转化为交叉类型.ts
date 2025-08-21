export {};

// 实现高级工具类型 UnionToIntersection<U>

// 例如

// type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true

type UnionToIntersection<T> = (
  T extends any ? (arg: T) => void : never
) extends (arg: infer InterSect) => void
  ? InterSect
  : never;

type intersection = UnionToIntersection<{ a: "foo" } | { b: 42 } | { c: true }>; // expected to be 'foo' & 42 & true
