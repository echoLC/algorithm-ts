// 使用哨兵技巧实现数组查找方法
function find(arrays: any[], target: any) {
  if (arrays == null || arrays.length < 0) return -1
  const len = arrays.length
  // 这里因为要将 arrays[len-1]的值替换成 target，所以要特殊处理这个值
  if (arrays[len - 1] === target) return len - 1

  // 把 arrays[len-1] 的值临时保存在变量 tmp 中，以便之后恢复。tmp = 6。
  // 之所以这样做的目的是：希望find()代码不要改变数组中的内容
  const tmp = arrays[len - 1]
  arrays[len - 1] = target

  let index = 0
  // while 循环比起一般的实现，少了 index < len 这个判断
  while (arrays[index] !== target) {
    index++
  }

  // 不改变数组，恢复原来的 arrays[len - 1] 数据
  arrays[len - 1] = tmp

  if (index === len - 1) {
    // 如果 index == n-1 说明，在0...len-2 之间都没有 target，所以返回 -1
    return -1
  } else {
    // 否则，返回 index，就是等于 target 值的元素的下标
    return index
  }
}
