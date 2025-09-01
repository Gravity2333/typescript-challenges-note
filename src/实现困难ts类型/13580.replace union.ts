export {};
// Given an union of types and array of type pairs to replace ([[string, number], [Date, null]]), return a new union replaced with the type pairs.

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

type IndexOf<Arr extends any[], T, Index extends any[] = []> = Arr extends [
  infer F,
  ...infer Rest
]
  ? Equal<T, F> extends true
    ? Index["length"]
    : IndexOf<Rest, T, [...Index, 1]>
  : -1;

type ReplaceUnion<T, R extends [any[], any[]]> = T extends any
  ? IndexOf<R[0], T> extends infer I extends number
    ? Equal<I, -1> extends true
      ? T
      : R[1][I]
    : never
  : never;

type t = ReplaceUnion<string| number ,[[string, number], [Date, null]]>