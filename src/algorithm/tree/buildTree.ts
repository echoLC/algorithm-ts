// 从前序与中序遍历序列构造二叉树
function buildTree(preorder: number[], inorder: number[]) {
  const valueToIndex = new Map<number, number>()

  for (let i = 0; i < inorder.length; i++) {
    valueToIndex.set(inorder[i], i)
  }

  const build = (preorder: number[], preStart: number, preEnd: number, inorder: number[], inStart: number, inEnd: number) => {
    if (preStart > preEnd) return null

    const rootVal = preorder[preStart]
    const index = valueToIndex.get(rootVal) ?? 0
    // 计算前序中的左子树节点数量
    const leftIndex = index - inStart
    const root = new TreeNode(rootVal)

    // preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
    // 前序第一个为 root 节点，中序 root 节点左边为所有左子树节点，右边为所有右子树节点
    root.left = build(preorder, preStart + 1, preStart + leftIndex, inorder, inStart, index - 1)
    // preStart + leftIndex + 1 即为前序中右子树节点开始的节点
    root.right = build(preorder, preStart + leftIndex + 1, preEnd, inorder, index + 1, inEnd)

    return root
  }

  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
}