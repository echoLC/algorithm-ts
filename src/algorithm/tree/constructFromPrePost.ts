// 从前序与后序遍历构造二叉树
function constructFromPrePost (preorder: number[], postorder: number[]) {
  const valueToIndex = new Map<number, number>()

  for (let i = 0; i < postorder.length; i++) {
    valueToIndex.set(postorder[i], i)
  }

  const build = (preorder: number[], preStart: number, preEnd: number, postorder: number[], postStart: number, postEnd: number) => {
    if (preStart > preEnd) return null

    if (preStart === preEnd) {
      return new TreeNode(preorder[preStart])
    }

    const rootVal = preorder[preStart]
    const leftRootVal = preorder[preStart + 1]
    const index = valueToIndex.get(leftRootVal) ?? 0
    const leftSize = index - postStart + 1

    const root = new TreeNode(rootVal)
    root.left = build(preorder, preStart + 1, preStart + leftSize, postorder, postStart, index)
    root.right = build(preorder, preStart + leftSize + 1, preEnd, postorder, index + 1, postEnd)

    return root
  }

  return build(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1)
}