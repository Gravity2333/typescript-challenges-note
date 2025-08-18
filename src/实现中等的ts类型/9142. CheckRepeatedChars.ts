export {}
// implement type CheckRepeatedChars<S> which will return whether type S contains duplicated chars?

// For example:

// type CheckRepeatedChars<'abc'>   // false
// type CheckRepeatedChars<'aba'>   // true

type CheckRepeatedChars<S extends string,M extends string = ""> = 
S extends `${infer F}${infer Rest}`? 
F extends M ? true: CheckRepeatedChars<Rest,M | F>:false


type t1 =  CheckRepeatedChars<'abc'>   // false
type t2 = CheckRepeatedChars<'aba'>   // true
