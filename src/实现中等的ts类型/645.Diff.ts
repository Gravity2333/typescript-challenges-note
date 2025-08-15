export = {};

// 获取两个接口类型中的差值属性。

// type Foo = {
//   a: string;
//   b: number;
// }
// type Bar = {
//   a: string;
//   c: boolean
// }

// type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
// type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }

type Diff<Obj1 extends object, Obj2 extends object> = {
  [k in
    | Exclude<keyof Obj1, keyof Obj2>
    | Exclude<keyof Obj2, keyof Obj1>]: k extends keyof Obj1
    ? Obj1[k]
    : k extends keyof Obj2
    ? Obj2[k]
    : never;
};


type Foo = {
  a: string;
  b: number;
}
type Bar = {
  a: string;
  c: boolean
}

type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }
