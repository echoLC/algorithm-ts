// 给你一个字符串 s，找到 s 中最长的回文子串

function longestPalindrome(s: string) {
  let res = ''

  const palindrome = (s: string, l: number, r: number) => {
    while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
      l--;
      r++;
    }
    return s.substring(l + 1, r)
  }

  for (let i = 0; i < s.length; i++) {
    const s1 = palindrome(s, i, i)
    const s2 = palindrome(s, i, i + 1)

    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }

  return res
}