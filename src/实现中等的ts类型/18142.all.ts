export {};
// Returns true if all elements of the list are equal to the second parameter passed in, false if there are any mismatches.

// For example

// type Test1 = [1, 1, 1]
// type Test2 = [1, 1, 2]

// type Todo = All<Test1, 1> // should be same as true
// type Todo2 = All<Test2, 1> // should be same as false

type Equal<A, B> = (<T>(a: T extends A ? 1 : 0) => void) extends <T>(
  a: (T extends B ? 1 : 0)
) => void
  ? true
  : false;

type All<Arr extends any[], T> = Arr extends [infer F, ...infer Rest]
  ? Equal<F, T> extends true
    ? All<Rest, T>
    : false
  : true;

  type Test1 = [1, 1, 1]
type Test2 = [1, 1, 2]

type Todo = All<Test1, 1> // should be same as true
type Todo2 = All<Test2, 1> // should be same as false
