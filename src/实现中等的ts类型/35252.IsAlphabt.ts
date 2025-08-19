export {}

//Determine if the given letter is an alphabet.

type Alphabet<S extends string> = Uppercase<S> extends Lowercase<S>? false: true

type t = Alphabet<"a">