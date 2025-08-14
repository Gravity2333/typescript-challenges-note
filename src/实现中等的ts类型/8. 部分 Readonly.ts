export = {};
// 实现一个泛型MyReadonly2<T, K>，它带有两种类型的参数T和K。

// 类型 K 指定 T 中要被设置为只读 (readonly) 的属性。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。

// 例如

// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }
// const todo: PartialReadonly<Todo, 'title' | 'description'> = {
//     title: "Hey",
//     description: "foobar",
//     completed: false,
//   }

//   todo.title = "Hello" // Error: cannot reassign a readonly property
//   todo.description = "barFoo" // Error: cannot reassign a readonly property
//   todo.completed = true // OK

type PartialReadonly<T, K extends keyof T> = {
  [p in Exclude<keyof T, K>]: T[p];
} & { readonly [k in K]: T[k] };

type PartialReadonly2<T, K extends keyof T> = Readonly<Pick<T,K>> & Omit<T,K>


interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
const todo: PartialReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

// todo.title = "Hello"; // Error: cannot reassign a readonly property
// todo.description = "barFoo"; // Error: cannot reassign a readonly property
// todo.completed = true; // OK
