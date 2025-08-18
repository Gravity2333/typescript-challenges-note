export {};

// You're required to implement a type-level parser to parse URL params string into an Union.

// ParseUrlParams<':id'> // id
// ParseUrlParams<'posts/:id'> // id
// ParseUrlParams<'posts/:id/:user'> // id | user

type ParseUrlParams<
  S extends string,
  Result extends string = ""
> = S extends `${string}:${infer Param}/${infer Rest}`
  ? ParseUrlParams<Rest, Result | Param>
  : S extends `${string}:${infer Param}`
  ? Exclude<Result | Param, "">
  : Exclude<Result, "">;

type t = ParseUrlParams<":id">; // id
type t2 = ParseUrlParams<"posts/:id">; // id
type t3 = ParseUrlParams<"posts/:id/:user">; // id | user
