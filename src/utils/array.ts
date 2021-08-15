// 随机生成一个数组
export function genRandomArray(length: number, max: number): Array<number> {
  return [...new Array(length)].map(() => Math.round(Math.random() * max))
}

// 随机获取数组的某一项元素
export function getArrayRandomOne(array: Array<number>) {
  return array[Math.floor(Math.random() * array.length)]
}
