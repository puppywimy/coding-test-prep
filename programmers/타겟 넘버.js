function createCalculation(numbers) {
  if (numbers.length === 1) {
    return [numbers[0], -numbers[0]];
  }
  const rest = numbers.slice(1);
  const calculations = [
    ...createCalculation(rest).map((calculation) => calculation + numbers[0]),
    ...createCalculation(rest).map((calculation) => calculation - numbers[0]),
  ];
  return calculations;
}

function solution(numbers, target) {
  return createCalculation(numbers).filter(
    (calculation) => calculation === target
  ).length;
}
