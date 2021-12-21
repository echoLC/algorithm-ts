// 冒泡排序
export default function insertSort(data: Array<number> | unknown): Array<number> {
  if (!Array.isArray(data)) throw new Error('Input muse be an Array')
  if (data.length <= 1) return data

  for (let i = 0; i < data.length; i++) {
    let flag = false // 设置提前退出标志位
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        let tmp = data[j]
        data[j] = data[j + 1]
        data[j + 1] = tmp
        flag = true
      }
    }
    if (!flag) break // 没有数据交换，提前退出
  }
  return data
}
