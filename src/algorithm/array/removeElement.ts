// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
function removeElement (nums: number[], val: number) {
  if (nums.length === 0) return 0

  let fast = 0
  let slow = 0

  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow++
    }

    fast++
  }

  return slow
}