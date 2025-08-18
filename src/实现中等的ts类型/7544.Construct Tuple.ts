export {}
// Construct a tuple with a given length.

// For example

// type result = ConstructTuple<2> // expect to be [unknown, unknown]

type ConstructTuple<N extends number, Result extends unknown[] = []> = Result['length'] extends N ? Result:
ConstructTuple<N,[...Result,unknown]>

type result = ConstructTuple<222> // expect to be [unknown, unknown]
