export = {};
// Given a tuple type T that only contains string type, and a type U, build an object recursively.

// type a = TupleToNestedObject<['a'], string> // {a: string}
// type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
// type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type

type TupleToNestedObject<Arr extends string[], T extends any> = Arr extends [
  infer Prop extends string,
  ...infer Rest extends string[]
]
  ? {
      [k in Prop]: TupleToNestedObject<Rest, T>;
    }
  : T;

type a = TupleToNestedObject<["a"], string>; // {a: string}
type b = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type
type d = TupleToNestedObject<["a", "b","c","d",'e'], boolean>; // boolean. if the tuple is empty, just return the U type
