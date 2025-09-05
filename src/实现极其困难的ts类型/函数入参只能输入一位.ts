export = {}

type StrLen<S extends string,R extends any[] = []> = S extends `${infer F}${infer Rest}`? StrLen<Rest,[...R,1]>:R['length']

function OnlySingleChar<const T extends string>(shouleByChar: StrLen<T> extends 1 ? T: "入参只能传1位字符"){

}

OnlySingleChar("h")
