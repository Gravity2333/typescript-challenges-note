export {};
// You have a target object and a source array of objects. You need to copy property from source to target, if it has the same property as the source, you should always keep the source property, and drop the target property. (Inspired by the Object.assign API)

// example
// type Target = {
//   a: 'a'
// }

// type Origin1 = {
//   b: 'b'
// }

// // type Result = Assign<Target, [Origin1]>
// type Result = {
//   a: 'a'
//   b: 'b'
// }
// type Target = {
//   a: 'a'
//   d: {
//     hi: 'hi'
//   }
// }

// type Origin1 = {
//   a: 'a1',
//   b: 'b'
// }

// type Origin2 = {
//   b: 'b2',
//   c: 'c'
// }

// type Answer = {
//    a: 'a1',
//    b: 'b2',
//    c: 'c'
//    d: {
//       hi: 'hi'
//   }
// }

/** 实现单一合并 */
type AssignSingle<
  Target extends Record<string, any>,
  Origin extends Record<string, any>
> = {
  [k in keyof Target | keyof Origin]: Target[k & string] extends Record<
    string,
    any
  >
    ? Origin[k & string] extends Record<string, any>
      ? AssignSingle<Target[k & string], Origin[k & string]>
      : k extends keyof Origin
      ? Origin[k & string]
      : Target[k & string]
    : k extends keyof Origin
    ? Origin[k & string]
    : Target[k & string];
};


type Assign<
  Target extends Record<string, any>,
  Origins extends Record<string, any>[],
> = Origins extends [
  infer F extends Record<string, any>,
  ...infer Rest extends Record<string, any>[]
]
  ? Assign<AssignSingle<Target, F>, Rest>
  : Target;

type Target = {
  a: "a";
};

type Origin1 = {
  b: "b";
};

type Result = Assign<Target, [Origin1]>;


type Target2 = {
  a: 'a'
  d: {
    hi: 'hi'
  }
}

type Origin2 = {
  a: 'a1',
  b: 'b'
}

type Origin3 = {
  b: 'b2',
  c: 'c'
}
type Result2 = Assign<Target2, [Origin2,Origin3]>;

type Answer = {
   a: 'a1',
   b: 'b2',
   c: 'c'
   d: {
      hi: 'hi'
  }
}
