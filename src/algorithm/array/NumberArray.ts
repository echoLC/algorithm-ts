class NumberArray {
  private preNums: number[] = [];

  constructor(nums: number[]) {
    this.preNums = new Array(nums.length + 1);

    this.preNums[0] = 0;

    for (let i = 0; i < this.preNums.length; i++) {
      this.preNums[i] = this.preNums[i - 1] + nums[i - 1];
    }
  }

  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left: number, right: number) {
    if (left > right) {
      throw new Error('left 不能大于 right');
    }

    return this.preNums[right + 1] - this.preNums[left];
  }
}
