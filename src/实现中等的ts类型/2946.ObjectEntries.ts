import { UpdateOutputFileStampsProject } from "typescript";

export = {};
// Implement the type version of Object.entries

// For example

// interface Model {
//   name: string;
//   age: number;
//   locations: string[] | null;
// }
// type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
type ObjectEntries<
  O extends object,
  T = {
    [k in keyof O]: [k, O[k]];
  }
> = T[keyof T];

type ObjectEntries2<O extends object, K extends keyof O = keyof O> = K extends K
  ? [K, O[K]]
  : never;

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries2<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];
