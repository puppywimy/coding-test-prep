function moveTo(n, currentIndex, destinationIndex) {
  if (n === 1) return [[currentIndex, destinationIndex]];
  const tempIndex = [1, 2, 3].filter(
    (index) => index !== currentIndex && index !== destinationIndex
  )[0];
  return [
    ...moveTo(n - 1, currentIndex, tempIndex),
    ...moveTo(1, currentIndex, destinationIndex),
    ...moveTo(n - 1, tempIndex, destinationIndex),
  ];
}

function solution(n) {
  return moveTo(n, 1, 3);
}
