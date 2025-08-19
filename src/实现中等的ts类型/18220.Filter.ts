export {};
// Implement the type Filter<T, Predicate> takes an Array T, primitive type or union primitive type Predicate and returns an Array include the elements of Predicate.

type Equal<A, B> = (<T>() => T extends A ? 1 : 0) extends <T>() => T extends B
  ? 1
  : 0
  ? true
  : false;



type Include<Union extends any, T> = (Union extends any
    ? Equal<Union, T> extends true
      ? true
      : never
    : never) extends never ? false: true;

type Filter<Arr extends any[], T> = Arr extends [infer F, ...infer Rest]
  ? Include<T, F> extends true
    ? [F, ...Filter<Rest, T>]
    : [...Filter<Rest, T>]
  : [];
  
type filtered = Filter<[1, 2, 3, 4, 6, 8, 9, 0, 3, 3], 1 | 2 | 3 | 4>;
