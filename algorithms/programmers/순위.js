function getVisitCount(table, i) {
  const visits = [];
  visits[i] = true;
  const queue = [i];
  while (queue.length) {
    const current = queue.shift();
    for (const next of table[current]) {
      if (visits[next] !== undefined) continue;
      visits[next] = true;
      queue.push(next);
    }
  }
  return visits.filter((visit) => visit).length - 1;
}

function solution(n, results) {
  const winTable = new Array(n).fill().map((_) => []);
  const defeatTable = new Array(n).fill().map((_) => []);
  for (const result of results) {
    winTable[result[0] - 1].push(result[1] - 1);
    defeatTable[result[1] - 1].push(result[0] - 1);
  }

  const records = [];
  for (let i = 0; i < n; i++) {
    records[i] = getVisitCount(winTable, i) + getVisitCount(defeatTable, i);
  }

  return records.filter((record) => record === n - 1).length;
}
