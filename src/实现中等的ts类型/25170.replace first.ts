export {}
// Implement the type ReplaceFirst<T, S, R> which will replace the first occurrence of S in a tuple T with R. If no such S exists in T, the result should be T.


type ReplaceFirst<T extends string,S extends string, R extends string> = T extends `${infer Prefix}${S}${infer Suffix}`? 
`${Prefix}${R}${Suffix}`: T


type t  = ReplaceFirst<"hello world","orl","aa">