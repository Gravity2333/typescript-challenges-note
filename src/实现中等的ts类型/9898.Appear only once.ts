export {};
// Find the elements in the target array that appear only once. For example：input: [1,2,2,3,3,4,5,6,6,6]，output: [1,4,5].

type Include<Arr extends any[], T> = Arr extends [infer F, ...infer Rest]
  ? F extends T
    ? true
    : Include<Rest, T>
  : false;

type AppearOnce<Arr extends any[], Result extends any[] = []> = Arr extends [
  infer F,
  ...infer Rest
]
  ? Include<Rest, F> extends true
    ? AppearOnce<Rest, [...Result, F]>
    : AppearOnce<Rest, Result>
  : Result;

type ss = AppearOnce<[1, 2, 5, 78, 3, 2]>;
