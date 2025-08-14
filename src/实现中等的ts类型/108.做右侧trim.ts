export = {};
// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

// For example

// type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'

type Trim<S extends string> = S extends ` ${infer LEFT_REST}`
  ? Trim<LEFT_REST>
  : S extends `${infer RIGHT_REST} `
  ? Trim<RIGHT_REST>
  : S;

type trimmed = Trim<"    Hello World        ">; // expected to be 'Hello World'
