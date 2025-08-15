export {};

// Implement the type version of binary tree inorder traversal.

// For example:

// const tree1 = {
//   val: 1,
//   left: null,
//   right: {
//     val: 2,
//     left: {
//       val: 3,
//       left: null,
//       right: null,
//     },
//     right: null,
//   },
// } as const

// type A = InorderTraversal<typeof tree1> // [1, 3, 2]

interface TreeNode {
  val: any;
  left: TreeNode | null;
  right: TreeNode | null;
}

type InorderTraversal<Node extends TreeNode | null> = Node extends null
  ? []
  : [
      ...InorderTraversal<NonNullable<Node>["left"]>,
      NonNullable<Node>["val"],
      ...InorderTraversal<NonNullable<Node>["right"]>
    ];

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const;

type A = InorderTraversal<typeof tree1>; // [1, 3, 2]
