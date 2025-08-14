export = {}
// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

// For example

// type Arr = ['1', '2', '3']

// type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

type TupleToUnion<Arr extends any[]> = Arr[number]
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

type TupleToUnion2<Arr extends any[]> = Arr extends [...(infer R)]? R: never

type Test2 = TupleToUnion2<Arr> // expected to be '1' | '2' | '3'
