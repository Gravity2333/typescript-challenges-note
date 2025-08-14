export = {};
// Implement Replace<S, From, To> which replace the string From with To once in the given string S

// For example

// type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

type Replace<
  S extends string,
  NeedReplace extends string,
  Replaced extends string
> = S extends `${infer Prefix}${NeedReplace}${infer Suffix}`
  ? `${Prefix}${Replaced}${Suffix}`
  : S;

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
