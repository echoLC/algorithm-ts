// 二叉树的第 k 大节点
function kthLargest (root: TreeNode | null, k: number) {
  const values: number[] = []

  const traverse = (root: TreeNode | null) => {
    if (root == null) return

    traverse(root.left)
    values.push(root.val)
    traverse(root.right)
  }

  traverse(root)

  values.reverse()

  return values[k - 1]
}