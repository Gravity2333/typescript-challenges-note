export = {};

// 实现一个通用的RequiredByKeys<T, K>，它接收两个类型参数T和K。

// K指定应设为必选的T的属性集。当没有提供K时，它就和普通的Required<T>一样使所有的属性成为必选的。

// 例如:

// interface User {
//   name?: string
//   age?: number
//   address?: string
// }

// type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
// 思路 先 Omit 再 &

type RequiredByKeys<
  O extends object,
  T extends keyof O,
  // 新的方法，将需要用到的值放到 范型中
  R = Omit<O, T> & {
    [k in T]-?: O[k];
  }
> = {
  [k in keyof R]: R[k];
};

interface User {
  name?: string;
  age?: number;
  address?: string;
}

type UserRequiredName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }
