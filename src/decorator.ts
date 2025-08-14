// function test(msg: string) {
//   return function (target: new (a: number) => object) {
//     console.log(target, msg);
//   };
// }

// function d1(msg: string) {
//   console.log("d1");
//   return function (target: new (a: number) => object) {
//     console.log(msg);
//   };
// }

// function d2(msg: string) {
//   console.log("d2");
//   return function (target: new (a: number) => object) {
//     console.log(msg);
//   };
// }

// function d(target: any, key: string) {
//   console.log('d',target, key, User.prototype === target);
//   if (!target?.__props) {
//     target.__props = [];
//   }

//   target.__props.push(key);
// }

// function f(target: any,fnName: string,descriptor: any){
//   console.log('f',target,fnName,descriptor)
// }

// @d1("d1 decorator")
// // @d2("d2 decorator")
// class User {
//   @d
//   name: string; // 3-5字
//   @d
//   static age: number; // 0 - 100
//   constructor() {}

//   @f
//   fn(){}
// }

// console.log(User,User.prototype)

export function classDescriptor(description: string) {
  return (target: new (...args: any[]) => object) => {
    // 保存到原型
    target.prototype.$classDescription = description;
  };
}

export function propDescription(description: string) {
  return (target: any, propName: string) => {
    if (!target.$propDescriptions) {
      target.$propDescriptions = [];
    }

    target.$propDescriptions.push({
      propName,
      description,
    });
  };
}

export function printObj(obj: any) {
  console.log(obj.$classDescription);
  console.log(obj.$propDescriptions);
}


export function paramDescription(target: any,fnName: string,index: number){
  console.log(target,fnName,index)
}