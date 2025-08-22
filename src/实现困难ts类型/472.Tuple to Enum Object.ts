export {}

// 枚举是 TypeScript 的一种原生语法（在 JavaScript 中不存在）。因此在 JavaScript 中枚举会被转成如下形式的代码：

// let OperatingSystem
// ;(function (OperatingSystem) {
//   OperatingSystem[(OperatingSystem['MacOS'] = 0)] = 'MacOS'
//   OperatingSystem[(OperatingSystem['Windows'] = 1)] = 'Windows'
//   OperatingSystem[(OperatingSystem['Linux'] = 2)] = 'Linux'
// })(OperatingSystem || (OperatingSystem = {}))
// 在这个问题中，你实现的类型应当将给定的字符串元组转成一个行为类似枚举的对象。此外，枚举的属性一般是 pascal-case 的。

// Enum<['macOS', 'Windows', 'Linux']>
// // -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }
// 如果传递了第二个泛型参数，且值为 true，那么返回值应当是一个 number 字面量。

// Enum<['macOS', 'Windows', 'Linux'], true>
// // -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }

type Enum<Arr extends string[],T extends boolean = false> = T extends false? 
{
    [k in Arr[number]]: k
}:{
    [k in keyof Arr as k extends `${number}` ? Arr[k]: never]: k
}

type  e =  Enum<['macOS', 'Windows', 'Linux']>
type e2 =  Enum<['macOS', 'Windows', 'Linux'], true>