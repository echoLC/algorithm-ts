// 插入排序
function insertSort(data: Array<number> | unknown): Array<number> {
  if (!Array.isArray(data)) throw new Error('Input muse be an Array')

  for (let i = 0; i < data.length; i++) {
    for (let j = i; j > 0 && data[j] < data[j - 1]; j--) {
      let min = data[j]
      data[j] = data[j - 1]
      data[j - 1] = min
    }
  }
  return data
}
