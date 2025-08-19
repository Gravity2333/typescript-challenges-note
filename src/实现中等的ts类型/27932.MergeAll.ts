export {};

// Merge variadic number of types into a new type. If the keys overlap, its values should be merged into an union.

// For example:

// type Foo = { a: 1; b: 2 }
// type Bar = { a: 2 }
// type Baz = { c: 3 }

// type Result = MergeAll<[Foo, Bar, Baz]> // expected to be { a: 1 | 2; b: 2; c: 3 }

type MergeAll<
  Arr extends Record<string, any>[],
  Result extends Record<string, any> = {}
> = Arr extends [
  infer F extends Record<string, any>,
  ...infer Rest extends Record<string, any>[]
]
  ? MergeAll<
      Rest,
      {
        [k in keyof F | keyof Result]: k extends keyof F
          ? k extends keyof Result
            ? F[k] | Result[k]
            : F[k]
          : k extends keyof Result
          ? Result[k]
          : never;
      }
    >
  : Result;

type Foo = { a: 1; b: 2 };
type Bar = { a: 2 };
type Baz = { c: 3 };

type Result = MergeAll<[Foo, Bar, Baz]>; // expected to be { a: 1 | 2; b: 2; c: 3 }
