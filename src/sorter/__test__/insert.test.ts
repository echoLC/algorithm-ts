import insertSort from '../insertSort'
import { genRandomArray } from '../../utils/array'

describe('Insert Sort', () => {
  test('it should return sortable array', () => {
    const array = genRandomArray(20, 50)
    const sortArray = insertSort(array)
    console.log(sortArray)
    expect(sortArray[3]).toBeLessThanOrEqual(sortArray[15])
  })
})
