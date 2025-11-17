function solution(enroll, referral, seller, amount) {
  const price = 100;

  const tree = new Map();
  tree.set("center", { cumulatedProfit: 0, parentName: null });
  for (let i = 0; i < enroll.length; i++) {
    const name = enroll[i];
    const parentName = referral[i];
    tree.set(name, {
      cumulatedProfit: 0,
      parentName: parentName === "-" ? "center" : parentName,
    });
  }

  for (let i = 0; i < seller.length; i++) {
    const name = seller[i];
    const profit = amount[i] * price;

    let currentNode = tree.get(name);
    let currentProfit = profit;
    while (currentNode.parentName !== null) {
      if (currentProfit === 0) break;
      const tenPercent = Math.floor(currentProfit * 0.1);
      let rest = currentProfit;
      if (tenPercent > 0) rest -= tenPercent;
      currentNode.cumulatedProfit += rest;
      currentNode = tree.get(currentNode.parentName);
      currentProfit = tenPercent;
    }
  }

  return enroll.map((name) => tree.get(name).cumulatedProfit);
}
