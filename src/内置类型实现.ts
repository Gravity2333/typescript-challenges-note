export = {}


type MyOmit<O extends Record<string,any>, T extends keyof O> = {
    [k in Exclude<keyof O,T>]: O[k]
}

type MyPick<O extends Record<string,any>, T extends keyof O> = {
    [k in keyof O]: O[k]
}

type MyRequire<O extends Record<string,any>>= {
    [k in keyof O]-?:O[k]
}

type MyPartial<O extends Record<string,any>>= {
    [k in keyof O]?:O[k]
}

type MyReadOnly<O extends Record<string,any>>= {
    readonly [k in keyof O]:O[k]
}

type MyWritiable<O extends Record<string,any>>= {
    -readonly [k in keyof O]:O[k]
}

/**
 * Exclude from T those types that are assignable to U
 */
type MyExclude<T, U> = T extends U ? never: T



/**
 * Extract from T those types that are assignable to U
 */
type MyExtract<T, U> = T extends U ? T : never;


/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T & {};

/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
