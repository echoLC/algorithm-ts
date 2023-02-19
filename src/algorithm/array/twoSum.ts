// 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数
function twoSum (numbers: number[], target: number): number[] {
  const o = {}

  for (let i = 0; i < numbers.length; i++) {
    const cur = numbers[i]
    if (o[cur] !== undefined) {
      return [o[cur], i + 1]
    } else {
      o[target - cur] = i + 1
    }
  }

  return [-1, -1]
}

function twoSum1 (numbers: number[], target: number) {
  let left = 0
  let right = numbers.length - 1

  while(left < right) {
    const sum = numbers[left] +  numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum > target) {
      right--
    } else {
      left++
    }
  }

  return [-1, -1]
}