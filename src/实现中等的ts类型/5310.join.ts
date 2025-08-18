export {};

// Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up.

// type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
// type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
// type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
// type Res3 = Join<["o"], "u">; // expected to be 'o'

type Join<
  Arr extends (string | number)[],
  Connector extends string | number,
  Result extends string = ""
> = Arr extends [infer F, ...infer Rest]
  ? F extends string
    ? Rest extends string[]
      ? Result extends ''
        ? Join<Rest, Connector, `${Result}${F}`>
        : Join<Rest, Connector, `${Result}${`${Connector}`}${F}`>
      : never
    : never
  : Result;

type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'
