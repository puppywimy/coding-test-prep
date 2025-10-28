function solution(k, d) {
  let answer = 0;

  const maxX = Math.floor(d / k) + 1;
  for (let x = 0; x < maxX; x++) {
    const y = Math.sqrt(d * d - x * x * k * k);
    answer += Math.floor(y / k) + 1;
  }

  return answer;
}
