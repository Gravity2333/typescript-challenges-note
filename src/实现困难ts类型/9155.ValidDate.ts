export = {};

// Implement a type ValidDate, which takes an input type T and returns whether T is a valid date.

// Leap year is not considered

// Good Luck!

// ValidDate<'0102'> // true
// ValidDate<'0131'> // true
// ValidDate<'1231'> // true
// ValidDate<'0229'> // false
// ValidDate<'0100'> // false
// ValidDate<'0132'> // false
// ValidDate<'1301'> // false

type BuildTuple<
  N extends number,
  Result extends any[] = []
> = Result["length"] extends N ? Result : BuildTuple<N, [...Result, 1]>;

type Sum<A extends number, B extends number> = [
  ...BuildTuple<A>,
  ...BuildTuple<B>
]["length"];

type Multiple<
  A extends number,
  B extends number,
  ATuple extends any[] = BuildTuple<A>,
  currentB extends any[] = BuildTuple<B>,
  R extends any[] = []
> = currentB extends [any, ...infer Rest]
  ? Multiple<A, B, ATuple, Rest, [...R, ...ATuple]>
  : R["length"];

type MyEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

type Includes<Arr extends any[], T> = Arr extends [infer F, ...infer Rest]
  ? MyEqual<F, T> extends true
    ? true
    : Includes<Rest, T>
  : false;

type MoreThan<A extends number, B extends number> = BuildTuple<A> extends [
  ...BuildTuple<B>,
  ...any[]
]
  ? true
  : false;

type LessThan<A extends number, B extends number> = BuildTuple<B> extends [
  ...BuildTuple<A>,
  ...any[]
]
  ? true
  : false;

type ValidDate<S extends string> =
  S extends `${infer M0 extends number}${infer M1 extends number}${infer D0 extends number}${infer D1 extends number}`
    ? Sum<number & Multiple<M0, 10>, M1> &
        number extends infer Months extends number
      ? LessThan<Months, 12> extends true
        ? Sum<number & Multiple<D0, 10>, D1> &
            number extends infer Days extends number
          ? MoreThan<Days, 1> extends true
            ? Includes<[1, 3, 5, 7, 8, 10, 12], Months> extends true // 31
              ? LessThan<Days, 31> extends true
                ? true
                : `月份${Months} - 日期${Days}错误, 日期必须 < 31`
              : Includes<[4, 6, 9, 11], Months> extends true // 30
              ? LessThan<Days, 30> extends true
                ? true
                : `月份${Months} - 日期${Days}错误, 日期必须 < 30`
              : LessThan<Days, 28> extends true
              ? true
              : `月份${Months} - 日期${Days}错误, 日期必须 < 28 (leap year~)` //2月 Leap year is 28days
            : `日期${Days}错误, 日期必须 > 0`
          : never
        : `月份${Months}错误, 月份必须 < 12`
      : never
    : "请传入正确的日期字符串";

type t1 = ValidDate<"0102">; // true
type t2 = ValidDate<"0131">; // true
type t3 = ValidDate<"1231">; // true
type t4 = ValidDate<"0229">; // false
type t5 = ValidDate<"0100">; // false
type t6 = ValidDate<"0132">; // false
type t7 = ValidDate<"1301">; // false
