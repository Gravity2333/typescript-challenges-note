export = {};
// Sudoku is a famous paper and pencil game. The goal of Sudoku is to fill a 9x9 grid with numbers so that each row, column and 3x3 section contain all of the digits between 1 and 9. You'll be given a finished 9x9 grid, and you need to determine if it's a valid Sudoku solution. Return true if it is, and false if it is not.

type Matrix = [
  [9, 5, 7, 8, 4, 6, 1, 3, 2],
  [2, 3, 4, 5, 9, 1, 6, 7, 8],
  [1, 8, 6, 7, 3, 2, 5, 4, 9],
  [8, 9, 1, 6, 2, 3, 4, 5, 7],
  [3, 4, 5, 9, 7, 8, 2, 6, 1],
  [6, 7, 2, 1, 5, 4, 8, 9, 3],
  [4, 6, 8, 3, 1, 9, 7, 2, 5],
  [5, 2, 3, 4, 8, 7, 9, 1, 6],
  [7, 1, 9, 2, 6, 5, 3, 8, 4]
];

type BadMatrix = [
  [9, 5, 7, 8, 4, 6, 1, 3, 2],
  [2, 3, 4, 5, 9, 1, 6, 7, 8],
  [1, 8, 6, 7, 3, 2, 5, 4, 9],
  [8, 9, 1, 6, 2, 3, 4, 5, 7],
  [3, 4, 5, 9, 7, 8, 2, 6, 1],
  [6, 7, 2, 1, 5, 4, 8, 9, 3],
  [4, 6, 8, 3, 1, 9, 7, 2, 5],
  [5, 2, 3, 4, 8, 7, 9, 1, 6],
  [1, 7, 9, 2, 6, 5, 3, 8, 4]
];

type ValidateRowNoDuplicate<Arr extends number[]> = Arr extends [
  infer F extends number,
  ...infer Rest extends number[]
]
  ? F extends Rest[number]
    ? false
    : ValidateRowNoDuplicate<Rest>
  : true;

type ValidateRow<
  Arr extends number[],
  Len extends number = Arr["length"]
> = Arr["length"] extends Len
  ? ValidateRowNoDuplicate<Arr> extends true
    ? true
    : false
  : false;

type ValidateSudoKuRows<Matric extends any[]> = Matric extends [
  infer FirstRow extends number[],
  ...infer RestRows extends number[][]
]
  ? ValidateRow<FirstRow> extends true
    ? ValidateSudoKuRows<RestRows>
    : false
  : true;

// 转置 矩阵
type ReverseMatric<
  Matric extends number[][],
  R extends number[][] = []
> = Matric[0] extends [any, ...any]
  ? ReverseMatric<
      {
        [k in keyof Matric]: Matric[k] extends [
          number,
          ...infer Rest extends number[]
        ]
          ? Rest
          : [];
      },
      [
        ...R,
        {
          [k in keyof Matric]: Matric[k][0];
        }
      ]
    >
  : R;

type BuildTuple<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [...R, 1]>;

type Plus<
  A extends number,
  B extends number,
  ATuple extends any[] = BuildTuple<A>,
  BTuple extends any[] = BuildTuple<B>
> = [...ATuple, ...BTuple]["length"];

type LessThan<A extends number, B extends number> = BuildTuple<B> extends [
  ...BuildTuple<A>,
  ...any[]
]
  ? true
  : false;

type BuildRange<
  F extends number,
  T extends number,
  C extends number = F,
  R extends number[] = []
> = LessThan<Plus<C, 1> & number, T> extends true
  ? BuildRange<F, T, Plus<C, 1> & number, [...R, C]>
  : R[number];

type FlattenObj<O extends Record<string, any>> = O[keyof O];

type UnionToIntersection<U extends any> = (
  U extends any ? (arg: U) => void : never
) extends (arg: infer I) => void
  ? I
  : never;

type LastUnion<U extends any> = UnionToIntersection<
  U extends any ? (arg: U) => void : never
> extends (arg: infer LastUnion) => void
  ? LastUnion
  : never;

type UnionToArray<U extends any> = [U] extends [never]
  ? []
  : LastUnion<U> extends infer L
  ? [...UnionToArray<Exclude<U, L>>, L]
  : [];

type ExtractBlock<
  Matric extends number[][],
  X1 extends number,
  X2 extends number,
  Y1 extends number,
  Y2 extends number
> = UnionToArray<
  FlattenObj<
    FlattenObj<{
      [r in BuildRange<
        X1,
        X2
      >]: Matric[r] extends infer ColumnResults extends number[]
        ? { [c in BuildRange<Y1, Y2>]: ColumnResults[c] }
        : never;
    }>
  >
>;

type TransFormSubMatrix<
  Matric extends number[][],
  Len extends number = Matric["length"],
  X extends number = 0,
  Y extends number = 0,
  R extends any[] = []
> = X extends Len
  ? Y extends Len
    ? R
    : TransFormSubMatrix<Matric, Len, 0, Plus<Y, 3> & number, R>
  : TransFormSubMatrix<
      Matric,
      Len,
      Plus<X, 3> & number,
      Y,
      [
        ...R,
        ExtractBlock<Matric, X, Plus<X, 3> & number, Y, Plus<Y, 3> & number>
      ]
    >;

type ValidSudoku<Matric extends number[][]> =
  ValidateSudoKuRows<Matric> extends true
    ? ValidateSudoKuRows<ReverseMatric<Matric>> extends true
      ? ValidateSudoKuRows<TransFormSubMatrix<Matrix>> extends true
        ? true
        : false
      : false
    : false;

type result = ValidSudoku<Matrix>; // expected to be true

type resultBad = ValidSudoku<BadMatrix>; // expected to be false
