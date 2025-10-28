function solution(cards) {
  const answers = cards.map(() => []);

  cards.forEach((card, i) => {
    const copiedCards = cards.slice();

    let count = 0;
    let cursor = i;
    let cursorCard = card;

    count++;
    copiedCards[cursor] = -1;
    cursor = cursorCard - 1;
    cursorCard = copiedCards[cursor];
    while (cursorCard !== -1) {
      count++;
      copiedCards[cursor] = -1;
      cursor = cursorCard - 1;
      cursorCard = copiedCards[cursor];
    }

    const answers2 = cards.map(() => 0); // 1번 제외 남는 상자 없으면 0점
    copiedCards.forEach((card, i) => {
      if (card === -1) return;

      const copiedCards2 = copiedCards.slice();

      let count = 0;
      let cursor = i;
      let cursorCard = card;

      count++;
      copiedCards2[cursor] = -1;
      cursor = cursorCard - 1;
      cursorCard = copiedCards2[cursor];
      while (cursorCard !== -1) {
        count++;
        copiedCards2[cursor] = -1;
        cursor = cursorCard - 1;
        cursorCard = copiedCards2[cursor];
      }
      answers2[i] = count;
    });

    answers[i] = count * answers2.sort((a, b) => b - a)[0];
  });

  if (answers.length === 1) return 0;
  return answers.sort((a, b) => b - a)[0];
}
