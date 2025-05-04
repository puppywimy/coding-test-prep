function solution(s) {
  let opens = 0;
  for (const element of s.split("")) {
    if (element === "(") opens++;
    else opens--;

    if (opens < 0) return false;
  }
  if (opens !== 0) return false;
  return true;
}
