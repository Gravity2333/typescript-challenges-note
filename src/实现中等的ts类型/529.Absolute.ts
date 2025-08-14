export {};
// Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string

// For example

// type Test = -100
// type Result = Absolute<Test> // expected to be "100"
type Absolute<N extends string | number | bigint> =
  `${N}` extends `-${infer Abs}` ? Abs : `${N}`
type Test = -100
type Result = Absolute<Test> // expected to be "100"

