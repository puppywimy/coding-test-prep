function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, current) => acc + current, 0);
  let sum2 = queue2.reduce((acc, current) => acc + current, 0);
  const targetValue = (sum1 + sum2) / 2;
  const circle = [...queue1, ...queue2];
  let pointer1 = 0;
  let pointer2 = queue1.length;
  const end = queue1.length * 3;
  for (let count = 0; count < end; count++) {
    if (sum1 === targetValue) return count;
    if (sum1 > targetValue) {
      sum1 -= circle[pointer1++ % circle.length];
    } else {
      sum1 += circle[pointer2++ % circle.length];
    }
  }
  return -1;
}
