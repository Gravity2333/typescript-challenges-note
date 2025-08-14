export = {};

// Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.

// You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

// For example:

// type X = {
//   x: {
//     a: 1
//     b: 'hi'
//   }
//   y: 'hey'
// }

// type Expected = {
//   readonly x: {
//     readonly a: 1
//     readonly b: 'hi'
//   }
//   readonly y: 'hey'
// }

// type Todo = DeepReadonly<X> // should be same as `Expected`

type ExtractDeepAttr<T> = {
  [k in keyof T]: T[k] extends object ? k : never;
}[keyof T];

type DeepReadonly<
  T,
  DeepKey extends keyof T = ExtractDeepAttr<T>,
  CommonKey extends keyof T = Exclude<keyof T, DeepKey>
> = Readonly<Record<CommonKey, T[CommonKey]>> & {
  readonly [k in DeepKey]: DeepReadonly<T[k]>;
};

type SampleDeepReadonly<T> = {
    readonly [k in keyof T]: T[k] extends Record<string, any>? SampleDeepReadonly<T[k]>: T[k]
}

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};




type Expected = SampleDeepReadonly<X>;
const x: Expected = {
    x: {
      a: 1,
      b: "hi",
    },
    y: "hey",
  };

//   x.x.a=2