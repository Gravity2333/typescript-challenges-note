export {};
// Implement type IsPalindrome<T> to check whether a string or number is palindrome.

// For example:

// IsPalindrome<'abc'> // false
// IsPalindrome<121> // true

type IsPalindrome<T extends string | number> =
  `${T}` extends `${infer F}${infer Rest}${infer L}`
    ? F extends L
      ? IsPalindrome<Rest>
      : false
    : true;

type a = IsPalindrome<"abc">; // false
type b = IsPalindrome<121>; // true
