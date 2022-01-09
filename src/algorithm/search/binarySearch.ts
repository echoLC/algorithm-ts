// 普通的二分查找
export function baseBinarySearch(arr: number[], target: number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) >> 1);
    if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// 查找第一个值等于给定值的元素，需要考虑数组中有重复值得情况
export function binarySearch1(arr: number[], target: number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) >> 1);
    if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] !== target) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

// 查找最后一个值等于给定值的元素，需要考虑数组中有重复值得情况
export function binarySearch2(arr: number[], target: number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) >> 1);
    if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid + 1] !== target) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
}

// 查找第一个大于等于给定值的元素，需要考虑数组中有重复值得情况
export function binarySearch3(arr: number[], target: number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) >> 1);
    if (arr[mid] >= target) {
      if (mid === 0 || arr[mid - 1] < target) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

// 查找最后一个小于等于给定值的元素，需要考虑数组中有重复值得情况
export function binarySearch4(arr: number[], target: number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) >> 1);
    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] > target) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
}
