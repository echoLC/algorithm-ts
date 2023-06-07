// 拼车
function carPooling(trips: number[][], capacity: number) {
  const nums = new Array<number>(1001).fill(0);
  const diff = new Difference1(nums);

  for (let i = 0; i < trips.length; i++) {
    const [val, from, to] = trips[i];
    diff.increment(from, to - 1, val);
  }

  const result = diff.result();

  return result.every(i => i <= capacity);
}

class Difference1 {
  private diff: number[] = [];

  constructor(nums: number[]) {
    if (!nums.length) return;

    this.diff = new Array(nums.length);
    this.diff[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] = nums[i - 1];
    }
  }

  increment(i: number, j: number, val: number) {
    this.diff[i] += val;

    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val;
    }
  }

  result() {
    const res = new Array<number>(this.diff.length);
    res[0] = this.diff[0];

    for (let i = 1; i < this.diff.length; i++) {
      res[i] = res[i - 1] + this.diff[i];
    }

    return res;
  }
}
