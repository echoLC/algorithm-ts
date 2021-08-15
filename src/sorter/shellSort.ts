// 希尔排序
function shellSort(data: Array<number> | unknown): Array<number> {
  if (!Array.isArray(data)) throw new Error('Input muse be an Array')

  const len = data.length
  let h = 1
  while (h < len / 3) {
    h = h * 3 + 1
  }

  while (h >= 1) {
    for (let i = 0; i < len; i++) {
      for (let j = i; j >= h && data[j] < data[j - h]; j -= h) {
        let min = data[j]
        data[j] = data[j - h]
        data[j - h] = min
      }
    }

    h = parseInt(String(h / 3), 10)
  }

  return data
}
