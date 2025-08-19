export {};

// Implement a generic DeepMutable which make every parameter of an object - and its sub-objects recursively - mutable.

// For example

// type X = {
//   readonly a: () => 1
//   readonly b: string
//   readonly c: {
//     readonly d: boolean
//     readonly e: {
//       readonly g: {
//         readonly h: {
//           readonly i: true
//           readonly j: "s"
//         }
//         readonly k: "hello"
//       }
//     }
//   }
// }

// type Expected = {
//   a: () => 1
//   b: string
//   c: {
//     d: boolean
//     e: {
//       g: {
//         h: {
//           i: true
//           j: "s"
//         }
//         k: "hello"
//       }
//     }
//   }
// }

// type Todo = DeepMutable<X> // should be same as `Expected`
// You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

type DeepMutable<X extends Record<string, any>> = {
  -readonly [k in keyof X]: X[k] extends Record<string, any>
    ? DeepMutable<X[k]>
    : X[k];
};

type X = {
  readonly a: () => 1;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "s";
        };
        readonly k: "hello";
      };
    };
  };
};
type Expand<T> = T extends infer O
  ? { [K in keyof O]: O[K] extends object ? Expand<O[K]> : O[K] }
  : never;

type expected = Expand<DeepMutable<X>>;
