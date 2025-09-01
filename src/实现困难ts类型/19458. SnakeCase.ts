export {};
// type res1 = SnakeCase<"hello">; // => "hello"
// type res2 = SnakeCase<"userName">; // => "user_name"
// type res3 = SnakeCase<"getElementById">; // => "get_element_by_id"

type IsUpperCase<T extends string> = Lowercase<T> extends T ? false : true;
type SnakeCase<
  S extends string,
  R extends string = ""
> = S extends `${infer F}${infer Rest}`
  ? IsUpperCase<F> extends true
    ? R["length"] extends 0
      ? SnakeCase<Rest, `${Lowercase<F>}`>
      : SnakeCase<Rest, `${R}_${Lowercase<F>}`>
    : SnakeCase<Rest, `${R}${F}`>
  : R;

type res1 = SnakeCase<"hello">; // => "hello"
type res2 = SnakeCase<"userName">; // => "user_name"
type res3 = SnakeCase<"getElementById">; // => "get_element_by_id"
