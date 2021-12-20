// 归并排序
export default function mergeSort(array: Array<number> | unknown): Array<number> {
  if (!Array.isArray(array)) throw new Error('Input muse be an Array')

  if (array.length < 2) return array

  const merge = (left: Array<number>, right: Array<number>) => {
    const result: Array<number> = []
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift()!)
      } else {
        result.push(right.shift()!)
      }
    }
    return result.concat(left).concat(right)
  }

  const mid = Math.floor(array.length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}
