function solution(s) {
  const wordLength = s.length;

  let middle = "";
  if (wordLength % 2 === 0) {
    middle = s.slice(wordLength / 2 - 1, wordLength / 2 + 1);
  } else {
    s;
    middle = s.slice(
      Math.floor(wordLength / 2),
      Math.floor(wordLength / 2) + 1
    );
  }

  return middle;
}
