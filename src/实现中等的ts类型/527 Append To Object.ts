export = {};
// Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

// For example

// type Test = { id: '1' }
// type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

type AppendToObject<
  Obj extends Record<string, any>,
  PropName extends string,
  propValue extends any
> = {
  [k in keyof Obj]: Obj[k];
} & {
  [k in PropName]: propValue;
};

type AppendToObject1<
  Obj extends Record<string, any>,
  PropName extends string,
  propValue extends any
> = {
  [k in keyof Obj | PropName]: k extends PropName ? propValue : Obj[k];
};

type Test = { id: "1" };
type Result = AppendToObject1<Test, "value", 4>; // expected to be { id: '1', value: 4 }
