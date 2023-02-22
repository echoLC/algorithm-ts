// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点
function diameterOfBinaryTree (root: TreeNode | null) {
  let maxDiameter = 0

  const maxDepth = (root: TreeNode | null) => {
    if (root == null) return 0

    const leftMax = maxDepth(root.left)
    const rightMax = maxDepth(root.right)
    maxDiameter = Math.max(leftMax + rightMax, maxDiameter)

    return Math.max(leftMax, rightMax) + 1
  }

  maxDepth(root)

  return maxDiameter
}