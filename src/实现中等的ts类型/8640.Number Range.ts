export {};

// Sometimes we want to limit the range of numbers... For examples.

// type result = NumberRange<2 , 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type ConstructTuple<
  N extends number,
  Result extends unknown[] = []
> = Result["length"] extends N ? Result : ConstructTuple<N, [...Result, 1]>;

type NumberRange<
  Start extends number,
  End extends number,
  StartTuple extends 1[] = ConstructTuple<Start>,
  EndTuple extends 1[] = ConstructTuple<End>,
  currentTuple extends 1[] = [],
  Result extends number[] = []
> = currentTuple extends [...StartTuple, ...any[]]
  ? EndTuple extends [...currentTuple, ...any[]]
    ? NumberRange<
        Start,
        End,
        StartTuple,
        EndTuple,
        [...currentTuple, 1],
        [...Result, currentTuple["length"]]
      >
    : Result[number]
  : NumberRange<Start, End, StartTuple, EndTuple, [...currentTuple, 1], Result>;

type result = NumberRange<2, 9>; //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
