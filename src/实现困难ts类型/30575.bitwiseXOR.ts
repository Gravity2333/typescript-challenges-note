export = {};
// Implement BitwiseXOR<S1,S2> which takes two binary string literal type and returns a binary string that represents the bitwise XOR of S1 and S2

// For example:

// BitwiseXOR<'0','1'> // expect '1'
// BitwiseXOR<'1','1'> // expect '0'
// BitwiseXOR<'10','1'>  // expect '11'

type Reverse<S extends string> = S extends `${infer F}${infer Rest}`
  ? `${Reverse<Rest>}${F}`
  : "";

type BitwiseXOR<
  S1 extends string,
  S2 extends string,
  ReversedS1 extends string = Reverse<S1>,
  ReversedS2 extends string = Reverse<S2>
> = ReversedS1 extends `${infer S1F}${infer S1Rest}`
  ? ReversedS2 extends `${infer S2F}${infer S2Rest}`
    ? S1F extends S2F
      ? `0${BitwiseXOR<"", "", S1Rest, S2Rest>}`
      : `1${BitwiseXOR<"", "", S1Rest, S2Rest>}`
    : S1F extends "0"
    ? `0${BitwiseXOR<"", "", S1Rest, "">}`
    : `1${BitwiseXOR<"", "", S1Rest, "">}`
  : ReversedS2 extends `${infer S2F}${infer S2Rest}`
  ? "0" extends S2F
    ? `0${BitwiseXOR<"", "", "", S2Rest>}`
    : `1${BitwiseXOR<"", "", "", S2Rest>}`
  : "";

type b1 = BitwiseXOR<"0", "1">; // expect '1'
type b2 = BitwiseXOR<"1", "1">; // expect '0'
type b3 = BitwiseXOR<"10", "1">; // expect '11'

