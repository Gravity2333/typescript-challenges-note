export {}
// by Maciej Sikora @maciejsikora

// Take the Challenge    简体中文 日本語 한국어

// If we have a type which is a wrapped type like Promise, how can we get the type which is inside the wrapped type?

// For example: if we have Promise<ExampleType> how to get ExampleType?

// type ExampleType = Promise<string>

// type Result = MyAwaited<ExampleType> // string

type MyAwaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never;


type ExampleType = Promise<string>

type result = MyAwaited<ExampleType> // string
