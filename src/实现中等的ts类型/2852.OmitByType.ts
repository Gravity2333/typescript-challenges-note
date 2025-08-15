export = {};

// From T, pick a set of properties whose type are not assignable to U.

// For Example

// type OmitBoolean = OmitByType<{
//   name: string
//   count: number
//   isReadonly: boolean
//   isEnable: boolean
// }, boolean> // { name: string; count: number }

type OmitByType<O extends object, T> = {
  [k in keyof O as O[k] extends T ? never : k]: O[k];
};

type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }
