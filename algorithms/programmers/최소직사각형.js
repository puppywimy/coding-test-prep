function solution(sizes) {
  const sortedSizes = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));

  const wMax = Math.max(...sortedSizes.map(([w, _]) => w));
  const hMax = Math.max(...sortedSizes.map(([_, h]) => h));

  return wMax * hMax;
}
