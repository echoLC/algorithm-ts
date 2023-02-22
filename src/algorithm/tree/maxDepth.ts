// 给定一个二叉树，找出其最大深度
function maxDepth (root: TreeNode | null) {
  let res = 0

  // 前序位置是进入一个节点的时候，后序位置是离开一个节点的时候，depth 记录当前递归到的节点深度
  let depth = 0

  const traverse = (root: TreeNode | null) => {
    if (root == null) return 

    depth++

    if (root.left == null && root.right == null) {
      res = Math.max(res, depth)
    }

    traverse(root.left)
    traverse(root.right)

    depth--
  }

  traverse(root)

  return res
}

function maxDepth1 (root: TreeNode | null): number {
  if (root == null) return 0

  const leftMax = maxDepth1(root.left)
  const rightMax = maxDepth1(root.right)

  return Math.max(leftMax, rightMax) + 1
}