function solution(progresses, speeds) {
  const schedules = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );
  let max = 0;
  let count = 0;
  const answer = [];
  for (let i = 0; i < schedules.length; i++) {
    if (schedules[i] > max) {
      max = schedules[i];
      if (i !== 0) answer.push(count);
      count = 1;
    } else {
      count++;
    }
  }
  answer.push(count);

  return answer;
}
