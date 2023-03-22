// 航班预定统计
function corpFlightBooks(bookings: number[][], n: number) {
  const answer = new Array(n).fill(0);

  for (let i = 0; i < bookings.length; i++) {
    const [start, end, value] = bookings[i];

    answer[start - 1] = value;

    if (end < n) {
      answer[end] -= value;
    }
  }

  for (let i = 1; i < n; i++) {
    answer[i] += answer[i - 1];
  }

  return answer;
}
