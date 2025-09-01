export {};
// The FizzBuzz problem is a classic test given in coding interviews. The task is simple:

// Print integers 1 to N, except:

// Print "Fizz" if an integer is divisible by 3;
// Print "Buzz" if an integer is divisible by 5;
// Print "FizzBuzz" if an integer is divisible by both 3 and 5.
// For example, for N = 20, the output should be: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz

// In the challenge below, we will want to generate this as an array of string literals.

// For large values of N, you will need to ensure that any types generated do so efficiently (e.g. by correctly using the tail-call optimisation for recursion).

type BuildTuple<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : BuildTuple<N, [...R, 1]>;

type Plus<
  A extends number,
  B extends number,
  ATuple extends any[] = BuildTuple<A>,
  BTuple extends any[] = BuildTuple<B>
> = [...ATuple, ...BTuple]["length"];

type Minus<
  A extends number,
  B extends number,
  ATuple extends any[] = BuildTuple<A>,
  BTuple extends any[] = BuildTuple<B>
> = ATuple extends [...BTuple, ...infer Rest] ? Rest["length"] : -1;

type isDivided<A extends number, B extends number> = Minus<
  A,
  B
> extends infer MinusResult extends number
  ? MinusResult extends 0
    ? true
    : MinusResult extends -1
    ? false
    : isDivided<MinusResult, B>
  : never;

type FizzBuzz<N extends number, R extends any[] = []> = Plus<
  R["length"],
  1
> extends Plus<N, 1>
  ? R
  : isDivided<Plus<R["length"], 1> & number, 3> extends infer _3Result
  ? isDivided<Plus<R["length"], 1> & number, 5> extends infer _5Result
    ? _3Result extends true
      ? _5Result extends true
        ? FizzBuzz<N, [...R, "FizzBuzz"]>
        : FizzBuzz<N, [...R, "Fizz"]>
      : _5Result extends true
      ? FizzBuzz<N, [...R, "Buzz"]>
      : FizzBuzz<N, [...R, Plus<R["length"], 1>]>
    : never
  : never;

type r = FizzBuzz<20>;
