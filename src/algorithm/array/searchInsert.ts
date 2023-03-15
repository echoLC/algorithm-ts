// 搜索插入位置
function searchInsert(nums: number[], target: number) {
  const len = nums.length;

  let left = 0;
  let right = len - 1;
  let ans = len;

  while (left <= right) {
    const mid = ((right - left) >> 1) + left;

    if (target <= nums[mid]) {
      ans = mid;

      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}
