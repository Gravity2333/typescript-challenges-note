export {}
//
// Remove the key starting with _ from given type T.

type PublicType<S extends string> = S extends `_${infer Rest}` ? Rest: S
type t = PublicType<"_test">
