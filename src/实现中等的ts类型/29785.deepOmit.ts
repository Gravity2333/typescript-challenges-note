export {};

// Implement a typeDeepOmit, Like Utility types Omit, A type takes two arguments.

// For example:

// type obj = {
//   person: {
//     name: string;
//     age: {
//       value: number
//     }
//   }
// }

// type test1 = DeepOmit<obj, 'person'>    // {}
// type test2 = DeepOmit<obj, 'person.name'> // { person: { age: { value: number } } }
// type test3 = DeepOmit<obj, 'name'> // { person: { name: string; age: { value: number } } }
// type test4 = DeepOmit<obj, 'person.age.value'> // { person: { name: string; age: {} } }

type DeepOmit<
  O extends Record<string, any>,
  T extends string
> = T extends `${infer F}.${infer Rest}`
  ? {
      [k in keyof O]: k extends F
        ? DeepOmit<O[F], Rest>
        : k extends keyof O
        ? O[k]
        : never;
    }
  : T extends `${infer RestType}`
  ? {
      [k in Exclude<keyof O, RestType>]: O[k];
    }
  : never;

type obj = {
  person: {
    name: string;
    age: {
      value: number;
    };
  };
};

type test1 = DeepOmit<obj, "person">; // {}
type test2 = DeepOmit<obj, "person.name">; // { person: { age: { value: number } } }
type test3 = DeepOmit<obj, "name">; // { person: { name: string; age: { value: number } } }
type test4 = DeepOmit<obj, "person.age.value">; // { person: { name: string; age: {} } }
