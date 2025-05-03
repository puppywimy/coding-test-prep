function solution(arr) {
  const answer = [];
  let prev = -1;
  for (const element of arr) {
    if (element === prev) continue;
    prev = element;
    answer.push(element);
  }

  return answer;
}
