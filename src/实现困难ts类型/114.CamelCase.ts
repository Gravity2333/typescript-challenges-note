export {}
// CamelCase hard #template-literal
// by Anthony Fu @antfu

// Take the Challenge    简体中文 日本語

// Implement CamelCase<T> which converts snake_case string to camelCase.

// For example

// type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
// type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one


type CamelCase<S extends string,Upper extends boolean = true> = 
S extends `${infer F}${infer Rest}`? (
    Upper extends true? `${Uppercase<F>}${CamelCase<Rest,false>}`:
    F extends '_'? `${CamelCase<Rest,true>}`:
    `${Lowercase<F>}${CamelCase<Rest,false>}`
): ""

type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one
