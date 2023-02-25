// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 1. 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 2. 展开后的单链表应该与二叉树 先序遍历 顺序相同。
function flatten (root: TreeNode | null) {
  if (root == null) return 

  flatten(root.left)
  flatten(root.right)

  const left = root.left
  const right = root.right

  root.left = null
  root.right = left

  let p = root
  while(p.right != null) {
    p = p.right
  }

  p.right = right
}
