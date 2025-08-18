export {}
// Implement the type version of Math.trunc, which takes string or number and returns the integer part of a number by removing any fractional digits.

// For example:

// type A = Trunc<12.34> // 12

type Trunc<N extends string|number> = `${N}` extends `${infer Integer}.${string}`? Integer: N

type A = Trunc<12.34> // 12

type A1 = Trunc<-12.> // 12