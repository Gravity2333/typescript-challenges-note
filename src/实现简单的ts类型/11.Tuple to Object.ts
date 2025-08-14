export {}
/**
 * 将一个元组类型转换为对象类型，这个对象类型的键/值和元组中的元素对应。

例如：

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
 */

/** note：
 * 
 * 
Test[‘name’] 用 name索引Test得到的值

Test[string] 的意思是：
用所有可能的字符串键去索引 Test，得到的值的类型的联合类型

type r = tt[number]
interface Test {
    [p: string]: number| string;
    [p: number]: number;
  }

用所有可能的数字索引 Test 获得值的类型
  type stringTypes = Test[number]; // number


对于数组 其索引为 number
type tt = [1,2,'hello',false]

type r = tt[number] // false | 1 | 2 | "hello"


对于 tuple也一样
const t =['11','22','33'] as const
type rt = (typeof t)[number] // "11" | "22" | "33"


 * 
 */

const t = ["11", "22", "33"] as const;
type rt = (typeof t)[number]; // "11" | "22" | "33"

type tt = [1, 2, "hello", false];

type r = tt[number]; // false | 1 | 2 | "hello"
interface Test {
  [p: string]: number | string;
  [p: number]: number;
}
type stringTypes = Test[number]; // number

// answer

type _TupleToObject<T extends readonly any[]> = {
  [k in T[number]]: k;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = _TupleToObject<typeof tuple>;

// res: type result = {
//     tesla: "tesla";
//     "model 3": "model 3";
//     "model X": "model X";
//     "model Y": "model Y";
// }