export { }

// Fill, a common JavaScript function, now let us implement it with types. Fill<T, N, Start?, End?>, as you can see,Fill accepts four types of parameters, of which T and N are required parameters, and Start and End are optional parameters. The requirements for these parameters are: T must be a tuple, N can be any type of value, Start and End must be integers greater than or equal to 0.

// type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
// In order to simulate the real function, the test may contain some boundary conditions, I hope you can enjoy it :)

type BuildTuple<N extends number, R extends number[] = []> = R['length'] extends N ? R : BuildTuple<N, [...R, 1]>

type Fill<
    T extends any[],
    N,
    Start extends number = 0,
    End extends number = T['length'],
    IgnoreStartTuple extends number[] = BuildTuple<Start>,
    IgnoreEndTuple extends number[] = BuildTuple<End>,
    FilledTuple extends number[] = [],
    Result extends any[] = []
> = IgnoreEndTuple extends [...IgnoreStartTuple, ...any[]] ?
    T extends [infer First, ...infer Rest] ?
    (FilledTuple extends [...IgnoreStartTuple, ...any[]] ?
        IgnoreEndTuple extends [...FilledTuple, ...any[]] ?
        Fill<Rest, N, Start, End, IgnoreStartTuple, IgnoreEndTuple, [...FilledTuple, 1], [...Result, N]> :
        Fill<Rest, N, Start, End, IgnoreStartTuple, IgnoreEndTuple, [...FilledTuple, 1], [...Result, First]> :
        Fill<Rest, N, Start, End, IgnoreStartTuple, IgnoreEndTuple, [...FilledTuple, 1], [...Result, First]>
    )
    : Result
    : "Start 必须小于 End"

type exp = Fill<[1, 2, 3], "fill", 1, 1> // expected to be [0, 0, 0]