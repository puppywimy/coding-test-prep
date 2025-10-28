function solution(k, m, scores) {
  const boxCount = Math.floor(scores.length / m);
  if (boxCount < 1) return 0; // 한 상자도 안 나오는 경우

  const sortedScores = [...scores]
    .sort((a, b) => b - a)
    .splice(0, boxCount * m);
  const boxes = new Array(boxCount).fill(0).map(() => []);

  sortedScores.forEach((score, i) => {
    boxes[Math.floor(i / m)].push(score);
  });

  let answer = 0;
  boxes.forEach((box) => {
    const boxPrice = box[m - 1] * m;
    answer += boxPrice;
  });

  return answer;
}
