function largestValues (root: TreeNode | null) {
  if (!root) return []

  const res: number[] = []

  const dfs = (root: TreeNode | null, height: number) => {
    if (!root) return 

    if (res.length === height) {
      res.push(root.val)
    } else {
      res.splice(height, 1, Math.max(res[height], root.val))
    }

    if (root.left) {
      dfs(root.left, height + 1)
    }

    if (root.right) {
      dfs(root.right, height + 1)
    }
  }

  dfs(root, 0)

  return res
}