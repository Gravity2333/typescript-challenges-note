export {};
// type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
// type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
// type Res2 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
// type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
// type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]

type Equal<A, B> = (<T>(a: T extends A? 1:2) => void) extends
 <T>(a: (T extends B? 1:2)) => void ? true : false;

type StrictInclude<Arr extends any[], T> = Arr extends [infer F,...infer Rest]? Equal<F,T> extends true ? true: StrictInclude<Rest,T>: false
type s = StrictInclude<[1,number], 1>;


type Unique<Arr extends any[], Result extends any[] = []> = Arr extends [
  infer F,
  ...infer Rest
]
  ? StrictInclude<Result, F> extends true
    ? Unique<Rest, Result>
    : Unique<Rest, [...Result, F]>
  : Result;

type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = Unique<[1, "a", 2, "b", 2, "a"]>;
// expected to be [1, "a", 2, "b"]
type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>;
// expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]>;
// expected to be [unknown, any, never]

