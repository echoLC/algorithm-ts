// 最长公共前缀
function longestCommonPrefix(strs: string[]) {
  if (!strs.length) return '';

  let res = strs[0];

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];

    let j = 0;

    for (; j < res.length && j < str.length; j++) {
      if (res[j] !== str[j]) {
        break;
      }
    }

    res = res.substring(0, j);

    if (res === '') {
      return res;
    }
  }

  return res;
}
