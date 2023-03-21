class NumberMatrix {
  private preSums: number[][] = [];

  constructor(matrix: number[][]) {
    const m = matrix.length;
    const n = matrix[0].length;

    if (m === 0 || n === 0) return;

    this.preSums = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        this.preSums[i][j] =
          this.preSums[i - 1][j] +
          this.preSums[i][j - 1] +
          matrix[i - 1][j - 1] -
          this.preSums[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number) {
    return (
      this.preSums[row2 + 1][col2 + 1] -
      this.preSums[row1][col2 + 1] -
      this.preSums[row2 + 1][col1] +
      this.preSums[row1][col1]
    );
  }
}
