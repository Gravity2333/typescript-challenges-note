export {}
// Capitalize Words
// by Anthony Fu @antfu

// Take the Challenge    简体中文 日本語

// Implement CapitalizeWords<T> which converts the first letter of each word of a string to uppercase and leaves the rest as-is.

// For example

// type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'

type CapitalizeWords<S extends string,> = S extends `${infer F}${infer Rest}`?`${Uppercase<F>}${CapitalizeWords<Rest>}`: ""

type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
