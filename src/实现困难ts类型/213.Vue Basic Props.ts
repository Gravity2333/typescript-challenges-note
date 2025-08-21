export {};

// 这是一个 基于前一个“6 - Simple Vue”挑战的升级版本，你需要在完成 Simple Vue 的基础上进行修改。

// 主要新增内容是 props 字段，它类似于 Vue 中的 props 选项，但是简化了。规则如下：

// props 是一个对象，对象的每个 key 对应组件可以接收的 prop。

// 注入的 props 可以在 data、computed、methods 中访问。

// 每个 prop 的定义方式有两种：

// 直接使用构造函数，例如：

// props: { foo: Boolean }

// 使用对象，包含 type 字段，例如：

// props: { foo: { type: Boolean } }

// 解析后的类型应该是：

// type Props = { foo: boolean }

// 支持多构造函数的情况，这时类型应该是 联合类型：

// props: { foo: { type: [Boolean, Number, String] } }

// 对应类型：

// type Props = { foo: boolean | number | string }

// 空对象的 prop，类型推导为 any。

// 不需要考虑 Vue 的 required、default、数组类型等其他规则。

type CtorTypes = Boolean | String | Number | Function;
type TypeFromConstructor<T> = T extends Boolean
  ? boolean
  : T extends String
  ? string
  : T extends Number
  ? number
  : T extends Function
  ? Function
  : any;

type ParseTypesFromConstructorList<
  CList extends CtorTypes[],
  R extends any[] = []
> = CList extends [infer F extends CtorTypes, ...infer Rest extends CtorTypes[]]
  ? ParseTypesFromConstructorList<Rest, [...R, TypeFromConstructor<F>]>
  : R[number];

type ParseProps<P extends Record<string, any>> = {
  [k in keyof P]: P[k] extends CtorTypes
    ? TypeFromConstructor<P[k]>
    : P[k] extends { type: infer T }
    ? T extends CtorTypes
      ? TypeFromConstructor<T>
      : T extends CtorTypes[]
      ? ParseTypesFromConstructorList<T>
      : never
    : never;
};

type t = ParseProps<{ foo: Boolean }>;
// 使用对象，包含 type 字段，例如：

// props: { foo: { type: Boolean } }
type t1 = ParseProps<{ foo: { type: Boolean } }>;

type Props = { foo: boolean | number | string };
type t2 = ParseProps<Props>;
