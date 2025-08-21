export {};
// Get Optional hard #utils #infer
// by Zheeeng @zheeeng

// Take the Challenge    简体中文 日本語

// Implement the advanced util type GetOptional<T>, which remains all the optional fields

// For example

// type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }

/**
 *
type t = {
  a?: string;
};

type res = undefined extends t["a"] ? 1 : 0;

是否为 required => 转换成 是不是为 undefined

 */

type GetOptional<O extends object> = {
  [k in keyof O as undefined extends O[k] ? k : never]: O[k];
};

type I = GetOptional<{ foo: number; bar?: string }>; // expected to be { foo: number }\
