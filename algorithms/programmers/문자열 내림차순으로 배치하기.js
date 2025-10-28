function solution(s) {
  const characters = s.split("");
  const sortedCharacters = characters.sort((a, b) => (a < b ? 1 : -1));
  return sortedCharacters.join("");
}
