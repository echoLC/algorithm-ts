// 三向切分快速排序
export default function threeWayQuickSort(
  arr: Array<number>,
  left: number,
  right: number
): Array<number> {
  let lt = 0
  let i = 0
  let gt = 0
  let v = 0

  if (left >= right) return arr

  v = arr[left]
  lt = left
  i = left + 1
  gt = right

  while (i <= gt) {
    if (arr[i] < v) {
      swap(arr, lt, i)
      lt++
      i++
    } else if (arr[i] > v) {
      swap(arr, i, gt)
      gt--
    } else {
      i++
    }
  }

  threeWayQuickSort(arr, left, lt - 1)
  threeWayQuickSort(arr, gt + 1, right)

  return arr
}

function swap(arr: Array<number>, i: number, j: number) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
