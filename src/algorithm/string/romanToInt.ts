// 罗马数字转整数
function romanToInt(s: string) {
  const valueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const value = valueMap[s[i]];
    const nextValue = valueMap[s[i]] ?? 0;

    if (value < nextValue) {
      res -= value;
    } else {
      res += value;
    }
  }

  return res;
}
