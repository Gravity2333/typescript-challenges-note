export {};
// Implement the built-in Exclude<T, U>

// Exclude from T those types that are assignable to U

// For example:

// type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

// type MyExclude<T,U extends T> = T extends U ? never : T
// type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

type MyExclude<U, K extends U> = U extends K ? never : U;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

type MyInclude<U, K extends U> = U extends K ? U : never;

type Result2 = MyInclude<"a" | "b" | "c", "a">; // 'b' | 'c'
