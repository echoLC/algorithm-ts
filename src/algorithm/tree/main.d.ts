declare class TreeNode<T = number> {
  constructor(val?: T, left?: TreeNode, right?: TreeNode);
  val: T;
  left: TreeNode | null;
  right: TreeNode | null;
}