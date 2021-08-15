export default function selectSort(data: Array<number> | unknown): Array<number> {
  if (!Array.isArray(data)) throw new Error('Input muse be an Array')

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      let minIndex = i
      if (data[j] < data[minIndex]) {
        minIndex = j
        let min = data[i]
        data[i] = data[minIndex]
        data[minIndex] = min
      }
    }
  }

  return data
}
