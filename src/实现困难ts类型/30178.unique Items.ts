export = {};
// function positive< N extends string>(
//     n: (`${N}` extends `-${string}` ? never : N)
//   ) {
//     return n;
//   }

//   const a = positive(1);   // ✅ 合法
// const b = positive(-1);  // ❌ 错误，-1 不能赋值给 never

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

type IsUniqueItems<Arr extends any[], MayByUnique = Arr[0]> = Arr extends [
  infer F,
  ...infer Rest
]
  ? Equal<MayByUnique, F> extends true
    ? IsUniqueItems<Rest, MayByUnique>
    : false
  : true;

type t = IsUniqueItems<[1, 2]> extends true ? true : never;

function uniqueItems<const Arr extends any[]>(
  arr: IsUniqueItems<Arr> extends true ? Arr : never
) {}

// uniqueItems([1, "1"]);
