function solution(n, edges) {
  const table = new Array(n).fill().map((_) => []);
  for (const edge of edges) {
    table[edge[0] - 1].push(edge[1] - 1);
    table[edge[1] - 1].push(edge[0] - 1);
  }

  const distances = [0];
  const queue = [0];
  while (queue.length) {
    const current = queue.shift();

    for (const next of table[current]) {
      if (distances[next] !== undefined) continue;
      distances[next] = distances[current] + 1;
      queue.push(next);
    }
  }

  const maxDistance = Math.max(...distances);
  return distances.filter((distance) => distance === maxDistance).length;
}
