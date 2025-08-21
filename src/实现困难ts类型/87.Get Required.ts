export {};
// Get Required hard #utils #infer
// by Zheeeng @zheeeng

// Take the Challenge    简体中文 日本語

// Implement the advanced util type GetRequired<T>, which remains all the required fields

// For example

// type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }\

/**
 *
type t = {
  a?: string;
};

type res = undefined extends t["a"] ? 1 : 0;

是否为 required => 转换成 是不是为 undefined

 */

type GetRequired<O extends object> = {
  [k in keyof O as undefined extends O[k] ? never : k]: O[k];
};

type I = GetRequired<{ foo: number; bar?: string }>; // expected to be { foo: number }\
