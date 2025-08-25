export {};
// Drop the specified chars from a string.

// For example:

// type Butterfly = DropString<'foobar!', 'fb'> // 'ooar!'

type DropOne<
  S extends string,
  Single extends string
> = S extends `${infer F}${infer Rest}`
  ? F extends Single
    ? `${DropOne<Rest, Single>}`
    : `${F}${DropOne<Rest, Single>}`
  : "";

type DropString<
  S extends string,
  E extends string
> = E extends `${infer F}${infer Rest}` ? DropString<DropOne<S, F>, Rest> : S;

type Butterfly = DropString<"foobar!", "fb">; // 'ooar!'
