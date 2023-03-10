// 二叉树剪枝
function pruneTree (root: TreeNode | null) {
  if (!root) return null

  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)

  if (!root.left && !root.right && root.val === 0) {
    return null
  }

  return root
}