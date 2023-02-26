// 通过数据项不重复的数组构造最大二叉树
function constructMaximumBinaryTree(nums: number[]) {
  if (nums.length === 0) return null

  const findMaxAndIndex = (nums: number[]) => {
    const max = Math.max(...nums)
    const index = nums.findIndex(i => i === max)
    return [max, index]
  }

  const [max, index] = findMaxAndIndex(nums)
  const root = new TreeNode(max)

  root.left = constructMaximumBinaryTree(nums.slice(0, index))
  root.right = constructMaximumBinaryTree(nums.slice(index + 1))

  return root
}