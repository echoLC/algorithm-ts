// 跳跃游戏 VII
function canReach(s: string, minJump: number, maxJump: number) {
  const len = s.length;

  const dp = new Array(len).fill(false);

  dp[0] = true;

  for (let i = 1; i < len; i++) {
    if (s[i] === '0') {
      for (let j = Math.max(0, i - maxJump); j <= i - minJump; j++) {
        if (dp[j]) {
          dp[i] = true;
          break;
        }
      }
    }
  }

  return dp[len - 1];
}
