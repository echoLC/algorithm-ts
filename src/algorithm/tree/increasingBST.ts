// 展开二叉搜索树
function increasingBST (root: TreeNode | null) {
  const tree = new TreeNode()
  let dummyTree = tree

  const traverse = (root: TreeNode | null) => {
    if (root == null) return 

    traverse(root.left)

    dummyTree.right = new TreeNode(root.val)
    dummyTree = dummyTree.right

    traverse(root.right)
  }

  traverse(root)

  return tree.right
}