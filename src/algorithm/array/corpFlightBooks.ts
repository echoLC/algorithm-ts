// 航班预定统计
function corpFlightBooks(bookings: number[][], n: number) {
  const answer = new Array(n).fill(0);
  const diff = new Difference(answer);

  for (let i = 0; i < bookings.length; i++) {
    const [start, end, value] = bookings[i];

    diff.increment(start - 1, end - 1, value);
  }

  return diff.result();
}
