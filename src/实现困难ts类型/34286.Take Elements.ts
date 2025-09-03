export = {};
// Implement a type Take<N, Arr> that returns the first N elements from an array Arr. If N is negative, return the last |N| elements

// For example,

// type T0 = Take<2, [1, 2, 3]> // [1, 2]
// type T1 = Take<3, ['1', 2, true, false]> // ['1', 2, true]
// type T2 = Take<-2, [1, 2, 3]> // [2, 3]
// type T3 = Take<0, [1, 2, 3]> // []
// type T4 = Take<5, [1, 2, 3]> // [1, 2, 3]
// type T5 = Take<3, []> // []

type Reverse<Arr extends any[]> = Arr extends [infer F, ...infer Rest]
  ? [...Reverse<Rest>, F]
  : [];

type Take<
  N extends number,
  Arr extends any[],
  needReverse extends boolean = `${N}` extends `-${number}` ? true : false,
  NAbs extends number = `${N}` extends `-${infer A extends number}` ? A : N,
  NeedFindArr extends any[] = needReverse extends true ? Reverse<Arr> : Arr,
  R extends any[] = []
> = R["length"] extends NAbs
  ? R
  : NeedFindArr extends [infer F, ...infer Rest]
  ? Take<
      0,
      [],
      needReverse,
      NAbs,
      Rest,
      needReverse extends true ? [F, ...R] : [...R, F]
    >
  : R;

type T0 = Take<2, [1, 2, 3]>; // [1, 2]
type T1 = Take<3, ["1", 2, true, false]>; // ['1', 2, true]
type T2 = Take<-2, [1, 2, 3]>; // [2, 3]
type T3 = Take<0, [1, 2, 3]>; // []
type T4 = Take<5, [1, 2, 3]>; // [1, 2, 3]
type T5 = Take<3, []>; // []
