class TreeNodeWithNext extends TreeNode {
  next?: TreeNode | null
}

// 填充每个节点的下一个右侧节点指针
function connect(root: TreeNodeWithNext | null) {
  if (root == null) return null

  const traverse = (node1: TreeNodeWithNext | null, node2: TreeNodeWithNext | null)=> {
    if (node1 == null || node2 == null) return 

    node1.next = node2

    // 同一父节点的左右节点连接
    traverse(node1.left, node1.right)
    traverse(node2.left, node2.right)

    // 不同父节点的左右节点连接
    traverse(node1.right, node2.left)
  }

  traverse(root.left, root.right)


  return root
}