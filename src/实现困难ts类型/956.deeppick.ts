export {};

type obj = {
  name: "hoge";
  age: 20;
  friend: {
    name: "fuga";
    age: 30;
    family: {
      name: "baz";
      age: 1;
    };
  };
};

//   type T1 = DeepPick<obj, 'name'>   // { name : 'hoge' }
//   type T2 = DeepPick<obj, 'name' | 'friend.name'>  // { name : 'hoge' } & { friend: { name: 'fuga' }}
//   type T3 = DeepPick<obj, 'name' | 'friend.name' |  'friend.family.name'>  // { name : 'hoge' } &  { friend: { name: 'fuga' }} & { friend: { family: { name: 'baz' }}}

type UnionToIntersection<U extends any> = (
  U extends any ? (arg: U) => 1 : never
) extends (arg: infer I) => 1
  ? I
  : never;

type DeepPick<O extends Record<string, any>, P extends string> = (
  P extends any
    ? P extends `${infer F extends string}.${infer Rest}`
      ? O[F] extends object
        ? { [k in F]: DeepPick<O[F], Rest> }
        : never
      : { [k in P]: O[k] }
    : never
) extends infer U
  ? UnionToIntersection<U>
  : never;

type T1 = DeepPick<obj, "name">; // { name : 'hoge' }
type T2 = DeepPick<obj, "name" | "friend.name">; // { name : 'hoge' } & { friend: { name: 'fuga' }}
type T3 = DeepPick<obj, "name" | "friend.name" | "friend.family.name">; // { name : 'hoge' } &  { friend: { name: 'fuga' }} & { friend: { family: { name: 'baz' }}}
