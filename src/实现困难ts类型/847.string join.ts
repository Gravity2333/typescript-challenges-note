export {};
// join('#')('a', 'b', 'c') // = 'a#b#c'

type Join<Arr extends string[], S extends string = ""> = Arr extends [
  infer F extends string,
  ...infer Rest extends string[]
]
  ? Rest["length"] extends 0
    ? `${F}`
    : `${F}${S}${Join<Rest, S>}`
  : "";

type ttt = Join<["a", "b", "c"], "#">;
