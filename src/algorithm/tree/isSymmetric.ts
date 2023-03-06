// 如果一棵二叉树和它的镜像一样，那么它是对称的
function isSymmetric (root: TreeNode | null) {
  if (root == null) return true

  const check = (left: TreeNode | null, right: TreeNode | null) => {
    if (!left && !right) return true

    if (!left || !right) return false

    return left.val === right.val && check(left.left, right.right) && check(left.right, right.left)
  }

  return check(root.left, root.right)
}