function solution(a, b) {
  const range = [a, b].sort((a, b) => a - b);
  let sum = 0;
  for (let i = range[0]; i <= range[1]; i++) {
    sum += i;
  }
  return sum;
}
