export {};
// 给定一个整数数组 nums 和一个目标整数 target, 如果 nums 数组中存在两个元素的和等于 target 返回 true, 否则返回 false

type BuildTuple<
  N extends number,
  Result extends any[] = []
> = Result["length"] extends N ? Result : BuildTuple<N, [...Result, 1]>;

type Sum<A extends number, B extends number> = [
  ...BuildTuple<A>,
  ...BuildTuple<B>
]["length"];

type isOneNumSum<
  Arr extends number[],
  T extends number,
  Target extends number
> = Arr extends [infer F extends number, ...infer Rest extends number[]]
  ? Sum<F, T> extends Target
    ? true
    : isOneNumSum<Rest, T, Target>
  : false;

type isTwoNumSum<Arr extends number[], Target extends number> = Arr extends [
  infer F extends number,
  ...infer Rest extends number[]
]
  ? isOneNumSum<Rest, F, Target> extends true
    ? true
    : isTwoNumSum<Rest, Target>
  : false;


  type t = isTwoNumSum<[1,2,3,4,5],10>
