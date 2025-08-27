export {};
// Implement the type version of Object.fromEntries

// For example:

// interface Model {
//   name: string;
//   age: number;
//   locations: string[] | null;
// }

// type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

// type result = ObjectFromEntries<ModelEntries> // expected to be Model

type ObjectFromEntries<T extends [string, any]> = {
  [k in T as k[0]]: k[1]
};
type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

type ObjectFromEntries1<T extends [string, any]> = {
    [K in T[0]]: T extends [K , infer I]? I: never
  }

type result = ObjectFromEntries1<ModelEntries> // expected to be Model
