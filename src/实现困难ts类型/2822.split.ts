export{}
// The well known split() method splits a string into an array of substrings by looking for a separator, and returns the new array. The goal of this challenge is to split a string, by using a separator, but in the type system!

// For example:

// type result = Split<'Hi! How are you?', ' '>  // should be ['Hi!', 'How', 'are', 'you?']

type Split<S extends string, E extends string,Result extends string[] = []> = 
S extends `${infer F}${E}${infer Rest}`? Split<Rest,E,[...Result,F]>: Result

type result = Split<'Hi! How are you?', ' '>  // should be ['Hi!', 'How', 'are', 'you?']

