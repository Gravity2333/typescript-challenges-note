export {};
// Merge two types into a new type. Keys of the second type overrides keys of the first type.

// For example

// type foo = {
//   name: string
//   age: string
// }
// type coo = {
//   age: number
//   sex: string
// }

// type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}

type Merge<
  Obj1 extends Record<string, any>,
  Obj2 extends Record<string, any>
> = {
  [k in keyof Obj1 | keyof Obj2]: k extends keyof Obj1
    ? Obj1[k]
    : k extends keyof Obj2
    ? Obj2[k]
    : never;
};


type foo = {
  name: string
  age: string
}
type coo = {
  age: number
  sex: string
}

type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}
