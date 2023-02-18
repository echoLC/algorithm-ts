// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

function moveZeros (nums: number[]) {
  if (nums.length === 0) return nums

  let slow = 0
  let fast = 0
  const len = nums.length

  while(fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
    }

    fast++
  }

  while (slow < len) {
    nums[slow] = 0
    slow++
  }

  return nums
}