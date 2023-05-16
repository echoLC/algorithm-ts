// 零钱兑换
export default function coinsChange(coins: number[], amount: number) {
  const cache: number[] = new Array(amount + 1).fill(-2);

  const _coinsChange = (coins: number[], amount: number) => {
    if (amount === 0) return 0;
    if (amount < 0) return -1;

    if (cache[amount] !== -2) return cache[amount];

    let res = Infinity;

    for (let coin of coins) {
      let subProblem = _coinsChange(coins, amount - coin);

      if (subProblem === -1) continue;

      res = Math.min(res, subProblem + 1);
    }

    const result = res === Infinity ? -1 : res;
    cache[amount] = result;

    return result;
  };

  return _coinsChange(coins, amount);
}

export function coinsChange1(coins: number[], amount: number) {
  const dp = new Array(amount + 1).fill(amount + 1);

  dp[0] = 0;

  for (let i = 0; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue;

      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
}
