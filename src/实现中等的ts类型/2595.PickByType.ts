export = {};

// From T, pick a set of properties whose type are assignable to U.

// For Example

// type OnlyBoolean = PickByType<{
//   name: string
//   count: number
//   isReadonly: boolean
//   isEnable: boolean
// }, boolean> // { isReadonly: boolean; isEnable: boolean; }

type PickByType<O extends object, T> = {
  [k in keyof O as O[k] extends T ? k : never]: O[k]
};

type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { isReadonly: boolean; isEnable: boolean; }
