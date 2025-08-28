export {};
// Implement BinaryToDecimal<S> which takes an exact string type S consisting 0 and 1 and returns an exact number type corresponding with S when S is regarded as a binary. You can assume that the length of S is equal to or less than 8 and S is not empty.

// type Res1 = BinaryToDecimal<'10'>; // expected to be 2
// type Res2 = BinaryToDecimal<'0011'>; // expected to be 3

type BuildTuple<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [...R, 1]>;

type Reverse<S extends string> = S extends `${infer F}${infer Rest}`
  ? `${Reverse<Rest>}${F}`
  : "";

type BinaryToDecimal<
  S extends string,
  Result extends any[] = [],
  Step extends any[] = BuildTuple<1>,
  Reversed extends string = Reverse<S>
> = Reversed extends `${infer F}${infer Rest}`
  ? F extends "1"
    ? BinaryToDecimal<"", [...Result, ...Step], [...Step, ...Step], Rest>
    : F extends "0"
    ? BinaryToDecimal<"", [...Result], [...Step, ...Step], Rest>
    : F
  : Result["length"];

type Res1 = BinaryToDecimal<"10">; // expected to be 2
type Res2 = BinaryToDecimal<"0011">; // expected to be 3
type Res4 = BinaryToDecimal<"0111">; // expected to be 7
type Res5 = BinaryToDecimal<"1111">; // expected to be 7