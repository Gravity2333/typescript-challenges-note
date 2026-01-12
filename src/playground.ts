export {};

type NullNullable<T> = T & {} extends never ? true : false;
type r = NullNullable<1>;
type t = undefined extends never ? 1 : 0;

type Expand<O extends Record<string, any>> = O extends infer P
  ? {
      [k in keyof P]: P[k] extends object ? Expand<P[k]> : P[k];
    }
  : never;

type Union2InterSection<U> = (U extends any ? (u: U) => void : never) extends (
  i: infer I
) => void
  ? I
  : never;

type t1 = Expand<
  Union2InterSection<{ a: 1 } | { b: { d: { e: { f: number } } } } | { c: 3 }>
>;

type LastUnion<U> = Union2InterSection<
  U extends any ? (u: U) => void : never
> extends (x: infer X) => void
  ? X
  : never;

type t2 = LastUnion<{ a: 1 } | { b: 2 } | { c: 3 }>;

function checkStr(t: any): t is string {
  return true;
}

const a: any = 231;
if (checkStr(a)) {
  // a.search
}

interface Test {
  a: number;
}

interface Test {
  [x: string]: any;
  a: number;
}

const obj: Test = {
  a: 100,
  b: "",
};

interface P {
  a: 100;
}

interface S extends P {
  b: 200;
}

const aa: { a: number; b: P } = { a: 100, b: { a: 100, b: 200 } as S };

let e = 1 as const;

const arr1: readonly number[] = [1, 2];
//  arr1[1] =20

class Person {}

// Person作为类型 为对象类型
const p: Person = new Person();

// Person作为值 为构造函数
const PersonClass: typeof Person = Person;

type GetClassObj<Ctor extends new (...args: any[]) => any> = Ctor extends new (
  ...args: any[]
) => infer Obj
  ? Obj
  : never;

const PersonObj: GetClassObj<typeof Person> = new Person();

type Callback<T> = (item: T) => void;
// 必须使用 callback()的时候 T才能推断

type ForEach = <ItemType>(array: ItemType[], callback: Callback<ItemType>) => void;

const foreach: ForEach = (arr, cb) => {};

foreach([1,2,'3'],(item)=>{}); // item: string | number
