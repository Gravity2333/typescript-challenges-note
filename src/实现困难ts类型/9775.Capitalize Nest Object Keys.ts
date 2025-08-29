export {};
// Capitalize the key of the object, and if the value is an array, iterate through the objects in the array.

type Capitalize<
  O extends Record<string, any> | Record<string, any>[],
  Target extends Record<string, any>[] = O extends any[] ? O : [O]
> = Target extends [infer F, ...infer Rest extends Record<string, any>[]]
  ? [
      {
        [k in keyof F as k extends `${infer FirstLetter}${infer RestLetter}`
          ? `${Uppercase<FirstLetter>}${RestLetter}`
          : never]: F[k];
      },
      ...Capitalize<{}, Rest>
    ]
  : [];

type t1 = Capitalize<{
  name: string;
  age: number;
  gender: "male" | "female";
}>;

type t2 = Capitalize<
  [
    {
      name: string;
      age: number;
      gender: "male" | "female";
    },
    {
      score: number;
    }
  ]
>;
