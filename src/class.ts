// abstract class Chess {
//   x: number = 0;
//   y: number = 0;
//   // 子类必须实现这个名字 设置抽象属性
//   abstract readonly name: string;
//   // move
//   abstract move(x: number, y: number): boolean;

//   abstract rule(): boolean;

//   // 模板函数
//   moveTemplatte() {
//     console.log("step1 ");
//     console.log("step2 ");

//     // 插入
//     this.rule();
//     console.log("step4");
//   }

//   static del() {}
// }

// class Horse  extends Chess{
// //   [prop: string]: number;
// //   [prop1: number]: string;
//   readonly name = "马";
// override move(x, y) {
//     console.log(x,y)
//     return true;
//   }

//   rule() {
//     return true;
//   }
// }

// const h = new Horse();

// h["a"] = 10;
// h.a = 20;

// class Board {
//   private static instance: Board;
//   private constructor() {}

//   public static create() {
//     if (!Board.instance) {
//       return (Board.instance = new Board());
//     } else {
//       return Board.instance;
//     }
//   }
// }


// function fn(this: number,a: string){
//     console.log(this,a)
// }

// class Test{
//    fn = fn
// }
