export {};
/**
 *
 *  不使用 Pick<T, K> ，实现 TS 内置的 Pick<T, K> 的功能。

从类型 T 中选出符合 K 的属性，构造一个新的类型。

例如：

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
 * 
 */

type _Pick<T, K extends keyof T> = {
  [k in K]: T[k];
};

type _pickResult = _Pick<
  {
    name: string;
    age: number;
    gender: "male" | "female";
  },
  "age" | "gender"
>;

type _pickResult1 = _Pick<1, "toExponential">;

type MyPick<O extends any, Keys extends keyof O> = {
  [k in Keys]: O[k];
};

type _2pickResult1 = MyPick<1, "toExponential">;

type MyOmit<T, K extends keyof T> = {
  [k in Exclude<keyof T, K>]: T[k];
};

type _2epickResult1 = MyOmit<1, "toExponential">;
