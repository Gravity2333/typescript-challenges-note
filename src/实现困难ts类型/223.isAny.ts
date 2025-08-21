export {}
// Sometimes it's useful to detect if you have a value with any type. This is especially helpful while working with third-party Typescript modules, which can export any values in the module API. It's also good to know about any when you're suppressing implicitAny checks.

// So, let's write a utility type IsAny<T>, which takes input type T. If T is any, return true, otherwise, return false.

type Equal<A,B> = (<T>()=>T extends A ? 1:0) extends  (<T>()=>T extends B ? 1:0)? true:false

type IsAny<MaybyAny> = Equal<MaybyAny,any>

type t = IsAny<any>
type t2 = IsAny<1>

// 利用性质 any& xxx = any unkown & xxx = xxx
type IsAny2<T> = 0 extends (1 & T) ? true : false;