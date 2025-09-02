export = {};
// Implement the util type OptionalUndefined<T, Props> that turns all the properties of T that can be undefined, into optional properties. In addition, a second -optional- generic Props can be passed to restrict the properties that can be altered.

// OptionalUndefined<{ value: string | undefined, description: string }>
// // { value?: string | undefined; description: string }

// OptionalUndefined<{ value: string | undefined, description: string | undefined, author: string | undefined }, 'description' | 'author'>
// // { value: string | undefined; description?: string | undefined, author?: string | undefined }

type FilterUndefinedKeys<
  O extends Record<string, any>,
  Key extends keyof O = keyof O
> = Key extends any ? ([undefined] extends [O[Key]] ? Key : never) : never;

type Expand<O extends Record<string, any>> = O extends infer I
  ? {
      [k in keyof O]: O[k] extends object ? Expand<O[k]> : O[k];
    }
  : never;

//  type t= FilterUndefinedKeys<{ value: string | undefined, description: string }>
type OptionalUndefined<
  O extends Record<string, any>,
  OptionKey extends keyof O = FilterUndefinedKeys<O>
> = Expand<
  Omit<O, OptionKey> & {
    [k in OptionKey]?: O[k];
  }
>;

type t1 = OptionalUndefined<{ value: string | undefined; description: string }>;
// { value?: string | undefined; description: string }

type t2 = OptionalUndefined<
  {
    value: string | undefined;
    description: string | undefined;
    author: string | undefined;
  },
  "description" | "author"
>;
// { value: string | undefined; description?: string | undefined, author?: string | undefined }
