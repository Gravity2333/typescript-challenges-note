export {};

// Given a generic tuple type T extends unknown[], write a type which produces all permutations of T as a union.

// For example:

// PermutationsOfTuple<[1, number, unknown]>
// // Should return:
// // | [1, number, unknown]
// // | [1, unknown, number]
// // | [number, 1, unknown]
// // | [unknown, 1, number]
// // | [number, unknown, 1]
// // | [unknown, number ,1]

type LoopArr<Arr extends any[], Processed extends any[] = []> = Arr extends [
  infer F,
  ...infer R
]
  ? [F, ...R, ...Processed] | LoopArr<R, [...Processed, F]>
  : never;

type loop = LoopArr<[1, number, unknown]>;

type PermutationsOfTuple<
  Arr extends any[],
  Loop extends any[] = LoopArr<Arr>
> = Loop extends [infer F, ...infer R] ? [F, ...PermutationsOfTuple<R>] | [F,...R] : [];


type t = PermutationsOfTuple<[1, number, unknown]>;
// Should return:
// | [1, number, unknown]
// | [1, unknown, number]
// | [number, 1, unknown]
// | [unknown, 1, number]
// | [number, unknown, 1]
// | [unknown, number ,1]


// type ttt = [1,...[2]|[3]]
