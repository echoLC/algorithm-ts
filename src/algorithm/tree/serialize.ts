const NULL_SYMBOL = '#'

// 二叉树的序列化与反序列化
function serialize (root: TreeNode | null) {

  const traverse = (root: TreeNode | null, res: string) => {
    if (root == null) {
      res += NULL_SYMBOL
      return 
    } else {
      res += root.val

      traverse(root.left, res)
      traverse(root.right, res)
    }

    return res
  }

  return traverse(root, '')
}

function deserialize (data: string) {
  const buildTree = (dataList: string[]) => {
    if (dataList[0] === NULL_SYMBOL) {
      dataList.shift()

      return null
    }

    const root = new TreeNode(+dataList[0])
    dataList.shift()

    root.left = buildTree(dataList)
    root.right = buildTree(dataList)

    return root
  }

  return buildTree(data.split(''))
}