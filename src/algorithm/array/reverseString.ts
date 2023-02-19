// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
function reverseString(s: string[]) {
  let left = 0
  let right = s.length - 1

  while(left < right) {
    const tmp = s[left]
    s[left] = s[right]
    s[right] = tmp

    left++
    right--
  }

  return s
}