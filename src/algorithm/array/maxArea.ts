// 盛水最多的容器
function maxArea(height: number[]) {
  let i = 0;
  let j = height.length - 1;
  let res = 0;

  while (i < j) {
    res =
      height[i] < height[j]
        ? Math.max(res, (j - i) * height[i++])
        : Math.max(res, (j - i) * height[j--]);
  }

  return res;
}
