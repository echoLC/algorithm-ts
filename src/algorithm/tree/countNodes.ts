// 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数
function countNodes (root: TreeNode | null) {
  if (root == null) return 0

  let lh = 0
  let rh = 0
  let l: TreeNode | null = root
  let r: TreeNode | null = root

  while(l) {
    l = l.left
    lh++
  }

  while(r) {
    r = r.right
    lh++
  }

  if (lh === rh) return Math.pow(2, lh) - 1

  return 1 + countNodes(root.left) + countNodes(root.right)
}