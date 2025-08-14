export = {}
// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

// For example

// type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

type _Capitalize<S extends string> = S extends `${infer C}${infer rest}`? `${Uppercase<C>}${rest}`:never

type capitalized = _Capitalize<'hello world'> // expected to be 'Hello world'
