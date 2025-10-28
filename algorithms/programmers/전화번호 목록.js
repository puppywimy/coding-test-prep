function solution(phone_book) {
  const phones = [...phone_book].sort();
  return !phones.some((_, i, origin) => origin[i + 1]?.startsWith(origin[i]));
}
