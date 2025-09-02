export = {};
// Write a type that verifies Sudoku game is solved. This is based off a challenge from Advent of Typescript 2023 by TypeHero (Day 22). So kudos for them for thinking up such a neat challenge!

type SudokuBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

type isDuplicate<Arr extends number[]> = Arr extends [
  infer F extends number,
  ...infer Rest extends number[]
]
  ? F extends Rest[number]
    ? true
    : isDuplicate<Rest>
  : false;

type isRowValidate<
  Arr extends number[],
  Len extends number
> = Arr["length"] extends Len
  ? isDuplicate<Arr> extends false
    ? true
    : false
  : false;

// type t = isRowValidate<SudokuBoard[0], 9>;

type ValidateRows<
  Arr extends any[],
  Len extends number = Arr[0]["length"]
> = Arr extends [
  infer FirstRow extends number[],
  ...infer RestRows extends number[][]
]
  ? isRowValidate<FirstRow, Len> extends true
    ? ValidateRows<RestRows>
    : false
  : true;

// type rvalidated = ValidateRows<SudokuBoard>

// traversed
type TravserseArr<Arr extends number[][]> = Arr[0] extends [any, ...any[]]
  ? [
      {
        [k in keyof Arr]: Arr[k][0];
      },
      ...TravserseArr<{
        [k in keyof Arr]: Arr[k] extends [any, ...infer Rest extends number[]]
          ? Rest
          : [];
      }>
    ]
  : [];

type travsersed = TravserseArr<SudokuBoard>;

type IsSuDoKo<Arr extends number[][]> = ValidateRows<Arr> extends true
  ? ValidateRows<TravserseArr<Arr>> extends true
    ? true
    : false
  : false;

type t = IsSuDoKo<SudokuBoard>;
