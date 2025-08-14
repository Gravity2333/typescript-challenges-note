// import a from "./add";

import { classDescriptor, paramDescription, printObj, propDescription } from "./decorator";

// console.log(a)
//

// const a: number = 10;
// console.log(111, a);

// export function sum(a: number, b: number): number;
// export function sum(a: string, b: string): string;
// export function sum(a, b) {
//   if (typeof a === "string" && typeof b === "string") {
//     return a + b;
//   } else if (typeof a === "number" && typeof b === "number") {
//     return a * b;
//   }
//   throw new Error('type err')
// }

// function fn(a: number,b?: number){}

// enum Gender{
//     Male='男',
//     Female='女'
// }

// enum Gender2{
//     Male=0,
//     Female
// }

// export default ()=>{}

// export let globalVar = 100

// interface A {}
// interface Fn {
//   (n: number): number;
//   (n: string): string;
// }

// type C = { readonly c: 10 };
// type B = { b: 10 };

// type AA = B & C

// const a: AA = { b: 10, c: 10 };
// // 这是 TypeScript 中的 交叉类型（intersection type），它的含义是：

// // 👉 组合两个类型的所有字段，字段名重复的要类型兼容。最终结果是两个类型字段的并集（union of keys），但字段类型是交叉的。

// type T = number & string

// interface Info{
//      name: string
// }
// const info: Readonly<Info> = {
//     name: 'l'
// }

// const arr :readonly number[] = []
// arr[1]=10

// interface Duck {
//   sound: "gagaga";
//   swim(): void;
// }

// let person: Duck = {
//   sound: "gagaga" as const,
//   swim() {return 1},
//   age: 11,
// };

// const duck: Duck = person

// class User {
//   public readonly id: string;
//   private _age: number = 0;
//   private _publishNum?: number;
//   constructor(public name: string) {
//     this.id = Math.random().toString(32).substring(2, 8);
//   }

//   get age() {
//     return this._age;
//   }

//   set age(num: number) {
//     this._age = num;
//   }
// }

// function fn(this: Global, a: string) {
//   console.log(this, a);
// }

// fn('10');

// @classDescriptor("用户")
// class User {
//   @propDescription("姓名")
//   public name: string;

//   @propDescription("年龄")
//   public age: string;

//   @propDescription("密码")
//   public passwd: string;

//   fn(@paramDescription @paramDescription a: number,@paramDescription b: string) {}
// }

printObj(new User());
console.log(window)

type a  = string
const str: typeof a = 1
