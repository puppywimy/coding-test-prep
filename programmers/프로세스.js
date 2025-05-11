function solution(priorities, location) {
  const processes = priorities.map((priority, i) => [i, priority]);
  let count = 0;
  while (processes.length) {
    const current = processes.shift();
    if (current[1] < Math.max(...processes.map(([_, priority]) => priority))) {
      processes.push(current);
    } else {
      count++;
      if (current[0] === location) break;
    }
  }
  return count;
}
