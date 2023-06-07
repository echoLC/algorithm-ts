// 差分数组
class Difference {
  private diff: number[] = [];

  constructor(list: number[]) {
    this.init(list);
  }

  init(list: number[]) {
    if (!list.length) return;

    this.diff = new Array(list.length);
    this.diff[0] = list[0];

    for (let i = 1; i < list.length; i++) {
      this.diff[i] = list[i] - list[i - 1];
    }
  }

  increment(i: number, j: number, val: number) {
    this.diff[i] += val;

    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val;
    }
  }

  result() {
    const res: number[] = new Array(this.diff.length);

    res[0] = this.diff[0];

    for (let i = 1; i < this.diff.length; i++) {
      res[i] = res[i - 1] + this.diff[i];
    }

    return res;
  }
}

function getModifiedArray(length: number, updates: number[][]) {
  const list: number[] = new Array(length).fill(0);

  const diff = new Difference(list);

  for (let i = 0; i < updates.length; i++) {
    const update = updates[i];
    const [left, right, val] = update;
    diff.increment(left, right, val);
  }

  return diff.result();
}
