function isPalindrome(s: string) {
  let left = 0
  let right = 0

  while(left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return false
    }

    left++
    right--
  }

  return true
}