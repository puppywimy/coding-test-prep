function solution(n, times) {
  let min = 1;
  let max = n * times.sort((a, b) => b - a)[0];

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    const total = times.reduce(
      (acc, current) => acc + Math.floor(mid / current),
      0
    );
    if (total < n) min = mid + 1;
    else max = mid - 1;
  }

  return min;
}
