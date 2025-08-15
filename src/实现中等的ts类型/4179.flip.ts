export {};

// Implement the type of just-flip-object. Examples:

// Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
// Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
// Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
// No need to support nested objects and values which cannot be object keys such as arrays

type Flip<O extends Record<string, any>> = {
  [k in keyof O as `${O[k]}`]: k;
};

type a = Flip<{ a: "x"; b: "y"; c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type a2 = Flip<{ a: 1; b: 2; c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type a3 = Flip<{ a: false; b: true }>; // {false: 'a', true: 'b'}
