// 插入排序
export default function insertSort(data: Array<number> | unknown): Array<number> {
  if (!Array.isArray(data)) throw new Error('Input muse be an Array')
  if (data.length <= 1) return data

  for (let i = 0; i < data.length; i++) {
    const value = data[i]
    let j = i - 1
    // 查找插入的位置
    for (; j >= 0; j--) {
      if (data[j] > value) {
        data[j + 1] = data[j] // 数据移动
      } else {
        break
      }
    }
    data[j + 1] = value // 插入数据
  }
  return data
}
