export {};

// The transpose of a matrix is an operator which flips a matrix over its diagonal; that is, it switches the row and column indices of the matrix A by producing another matrix, often denoted by AT.

// type Matrix = Transpose <[[1]]>; // expected to be [[1]]
// type Matrix1 = Transpose <[[1, 2], [3, 4]]>; // expected to be [[1, 3], [2, 4]]
// type Matrix2 = Transpose <[[1, 2, 3], [4, 5, 6]]>; // expected to be [[1, 4], [2, 5], [3, 6]]

type Transpose<
  A extends any[][],
  Result extends any[] = [],
  InitLen extends number = A[0]['length']
> = Result["length"] extends InitLen
  ? Result
  : A[0] extends [infer FA, ...infer RA]
  ? A[1] extends [infer FB, ...infer RB]
    ? Transpose<[RA, RB], [...Result, [FA, FB]],InitLen>
    : Transpose<[[RA]], [...Result, [FA]],InitLen>
  : never;

type Matrix = Transpose<[[1],[2]]>; // expected to be [[1]]
type Matrix1 = Transpose<[[1, 2], [3, 4]]>; // expected to be [[1, 3], [2, 4]]
type Matrix2 = Transpose<[[1, 2, 3], [4, 5, 6]]>; // expected to be [[1, 4], [2, 5], [3, 6]]
