// 二叉树的最近公共祖先
function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode) {
  let ans: null | TreeNode = null

  const dfs = (root: TreeNode | null, p: TreeNode, q: TreeNode) => {
    if (root == null) return false

    const lson = dfs(root.left, p, q)
    const rson = dfs(root.right, p, q)

    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      ans = root
    }

    return lson || rson || (root.val === p.val || root.val === q.val)
  }

  dfs(root, p, q)

  return ans
}

function lowestCommonAncestor1 (root: TreeNode, p: TreeNode, q: TreeNode) {
  const rootMap = new Map<number, TreeNode>()
  const visited = new Set<number>()

  const dfs = (root: TreeNode) => {
    if (root == null) return 

    if (root.left) {
      rootMap.set(root.left.val, root)

      dfs(root.left)
    }

    if (root.right) {
      rootMap.set(root.right.val, root)

      dfs(root.right)
    }
  }

  dfs(root)

  while(p) {
    visited.add(p.val)

    p = rootMap.get(p.val) as TreeNode
  }

  while(q) {
    if (visited.has(q.val)) {
      return q
    }

    q = rootMap.get(q.val) as TreeNode
  }

  return null
}