// 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度
function removeDuplicates (list: number[]) {
  if (!list.length) return 0

  const o = {}

  let i = 0

  while(i < list.length) {
    const value = list[i]

    if (o[value] !== undefined) {
      list.splice(i, 1)
    } else {
      o[value] = value
      i++
    }
  }

  return list.length
}

function removeDuplicates1 (list: number[]) {
  if (!list.length) return 0

  let slow = 0
  let fast = 0

  while (fast < list.length) {
    if (list[fast] !== list[slow]) {
      slow++

      list[slow] = list[fast]
    }

    fast++
  }

  return slow + 1
}