function solution(phone_book) {
  const phones = phone_book.slice().sort((a, b) => a.length - b.length);
  const set = new Set();
  for (const phone of phones) {
    for (let i = 0; i < phone.length; i++) {
      if (set.has(phone.slice(0, i + 1))) return false;
    }
    set.add(phone);
  }
  return true;
}
