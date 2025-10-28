function solution(s) {
  return (
    (s.length === 4 || s.length === 6) &&
    s
      .split("")
      .every(
        (character) =>
          48 <= character.charCodeAt(0) && character.charCodeAt(0) <= 57
      )
  );
}
