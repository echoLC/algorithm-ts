// 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树
function isBalanced (root: TreeNode | null) {
  if (root == null) return true

  const getDepth = (root: TreeNode | null) => {
    if (root == null) return 0

    const leftDepth = getDepth(root.left)
    const rightDepth = getDepth(root.left)

    return Math.max(leftDepth, rightDepth) + 1
  }

  return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getDepth(root.left) - getDepth(root.right))
}