export {}

type StrRepeat<S extends string> = S extends `${infer F}${infer Rest}`? 
Rest extends `${string}${F}${string}` ? true: StrRepeat<Rest>: false

type t = StrRepeat<"Hello">