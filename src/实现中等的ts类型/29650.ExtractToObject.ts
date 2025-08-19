export {};

// 实现一个类型，将属性值提取并合并到接口中。该类型接收两个参数，输出结果应是一个合并了属性值的对象（属性值本身是对象）。

// 例如：

// typescript
// type Test = { id: '1', myProp: { foo: '2' } }
// type Result = ExtractToObject<Test, 'myProp'> // 预期结果为 { id: '1', foo: '2' }
// 实现要求
// 输入：一个对象类型 T 和其某个属性名 K（该属性的值必须是一个对象类型）

// 输出：新对象类型，保留原对象的所有属性，同时将属性 K 的值展开平铺到结果对象中

// 补充说明
// 这个类型工具需要：

// 提取指定属性 K 的对象值

// 将原对象的其他属性和 K 的属性值合并成一个新对象类型

// 确保 K 对应的值确实是对象类型

type ExtractToObject<O extends object, T extends string> = T extends keyof O
  ? {
      [k in Exclude<keyof O, T> | keyof O[T]]: k extends keyof O[T]
        ? O[T][k]
        : k extends keyof O
        ? O[k]
        : never;
    }
  : O;

type Test = { id: "1"; myProp: { foo: "2" } };
type Result = ExtractToObject<Test, "myProp">; // 预期结果为 { id: '1', foo: '2' }
