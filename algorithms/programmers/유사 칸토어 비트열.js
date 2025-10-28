// 주어진 인덱스 이전까지의 1의 개수 반환(index = 1, 2, 3, ...)
function getCount(index) {
  if (index === 1) return 0;

  let count = 0;
  let scale = -1;
  let targetIndex = index;

  while (targetIndex / 5 ** (scale + 1) > 1) {
    scale++;
  }

  while (scale >= 0 && targetIndex > 0) {
    const sectionIndex = Math.ceil(targetIndex / 5 ** scale) - 1;

    if (sectionIndex === 2) {
      count += 2 * 4 ** scale;
      break;
    }

    switch (sectionIndex) {
      case 1: {
        count += 1 * 4 ** scale;
        break;
      }
      case 3: {
        count += 2 * 4 ** scale;
        break;
      }
      case 4: {
        count += 3 * 4 ** scale;
        break;
      }
    }
    targetIndex -= sectionIndex * 5 ** scale;
    scale--;
  }

  return count;
}

function solution(n, l, r) {
  return getCount(r + 1) - getCount(l);
}
