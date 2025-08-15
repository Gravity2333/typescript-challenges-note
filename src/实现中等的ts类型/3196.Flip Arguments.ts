import { Reverse } from "./3192.Reverse";

export = {};
// Implement the type version of lodash's _.flip.

// Type FlipArguments<T> requires function type T and returns a new function type which has the same return type of T but reversed parameters.

// For example:

// type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
// // (arg0: boolean, arg1: number, arg2: string) => void

type FlipArguments<F extends (...args: any[]) => any> = F extends (
  ...args: infer Arguments
) => infer R
  ? (...args: Reverse<Arguments>) => R
  : never;

type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>;
// // (arg0: boolean, arg1: number, arg2: string) => void
