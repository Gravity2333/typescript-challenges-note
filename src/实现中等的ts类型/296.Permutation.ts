export {};
// Implement permutation type that transforms union types into the array that includes permutations of unions.

// type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A']

type Permutation<U extends string, All extends string = U> = [U] extends [never]
  ? []
  : U extends U
  ? [U, ...Permutation<Exclude<All, U>>]
  : never;

type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A']
