// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点
function invertTree (root: TreeNode | null) {
  const traverse = (root: TreeNode | null) => {
    if (root == null) return null

    traverse(root.left)
    traverse(root.right)

    const left = root.left
    root.left = root.right
    root.right = left
  }

  traverse(root)

  return root
}

// 使用递归分解问题
function invertTree1(root: TreeNode | null) {
  if (root == null) return null

  const left = invertTree1(root.left)
  const right = invertTree1(root.right)

  root.left = right
  root.right = left

  return root
}