export {}
// Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.

// For example:

// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

// 数组/元组 -> 联合类型
type ArrToUnion<Arr extends any[]> = Arr[number];
type red = ArrToUnion<["Kars", "Esidisi", "Wamuu", "Santana"]>;
// "Kars" | "Esidisi" | "Wamuu" | "Santana

type Includes<Arr extends any[], U> = U extends ArrToUnion<Arr>
  ? "true"
  : "false"; // type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

type isPillarMen1 = Includes<
  ["Kars", "Esidisi", "Wamuu", "Santana"],
  "Santana"
>; // expected to be `true`
