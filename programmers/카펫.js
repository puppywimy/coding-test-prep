function getInstances(n) {
  if (n === 1) return [[1, 1]];
  const instances = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i !== 0) continue;
    instances.push([n / i, i]);
  }
  return instances;
}

function solution(brown, yellow) {
  return getInstances(yellow)
    .filter(([w, h]) => w * 2 + h * 2 + 4 === brown)
    .map(([w, h]) => [w + 2, h + 2])[0];
}
