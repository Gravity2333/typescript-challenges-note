export = {};
// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

// For example

// type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'

type ReplaceAll<
  S extends string,
  NeedReplace extends string,
  Replaced extends string
> = S extends `${infer Prefix}${NeedReplace}${infer Suffix}`
  ? ReplaceAll<`${Prefix}${Replaced}${Suffix}`, NeedReplace, Replaced>
  : S;

type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'
