export {};

//Given a number N, find the Nth triangular number, i.e. 1 + 2 + 3 + ... + N

type BuildTuple<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [...R, 1]>;

type Triangular<
  N extends number,
  CurrentIndex extends 1[] = [],
  Result extends 1[] = []
> = CurrentIndex["length"] extends N
  ? Result["length"]
  : Triangular<N, [...CurrentIndex, 1], [...Result, ...CurrentIndex, 1]>;


  type tt = Triangular<4>
  