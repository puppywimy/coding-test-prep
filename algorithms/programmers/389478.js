function solution(n, w, num) {
  const height = Math.ceil(n / w);
  const storage = Array.from({ length: height }).map(() => []);
  let index = 0;
  let [targetX, targetY] = [null, null];
  while (index < n) {
    const [x, y] = [
      Math.floor(index / w),
      Math.floor(index / w) % 2 === 0 ? index % w : w - (index % w) - 1,
    ];
    storage[x][y] = ++index;
    if (index === num) [targetX, targetY] = [x, y];
  }
  let count = 0;
  for (let i = targetX; i < height; i++) {
    if (storage[i][targetY] !== undefined) count++;
  }
  return count;
}
