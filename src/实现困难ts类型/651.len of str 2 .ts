// export {}

// Length of String 2

// Implement a type LengthOfString<S> that calculates the length of the template string (as in 298 - Length of String):

// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).

// 一次多蜀几个

type LengthOfString<S extends string,R extends any[] = []>  = 
S extends `${infer F1}${infer F2}${infer F3}${infer F4}${infer F5}${infer Rest}`? LengthOfString<Rest,[...R,1,1,1,1,1]>:
S extends `${infer F1}${infer F2}${infer F3}${infer F4}${infer Rest}`? LengthOfString<Rest,[...R,1,1,1,1]>:
S extends `${infer F1}${infer F2}${infer F3}${infer Rest}`? LengthOfString<Rest,[...R,1,1,1]>:
S extends `${infer F1}${infer F2}${infer Rest}`? LengthOfString<Rest,[...R,1,1]>:
S extends `${infer F1}${infer Rest}`? LengthOfString<Rest,[...R,1]>:
R['length']

type T0 = LengthOfString<`// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
// type T0 = LengthOfString<"foo"> // 3
// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).
`> // 3