// 给你一棵二叉树的根节点 root ，返回所有 重复的子树 
function findDuplicateSubtrees (root: TreeNode | null) {
  const seen = new Map()
  const repeat = new Set()

  let id = 0

  const traverse = (root: TreeNode | null) => {
    if (!root) return 0

    const values = [root.val, traverse(root.left), traverse(root.right)]
    const hash = values.toString()
    if (seen.has(hash)) {
      const pair = seen.get(hash)
      repeat.add(pair[0])
      return pair[1]
    } else {
      seen.set(hash, [root, ++id])
      return id
    }
  }

  traverse(root)
  
  return [...repeat]
}