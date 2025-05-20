function solution(n, losts, reserves) {
  const realLosts = losts
    .filter((lost) => !reserves.includes(lost))
    .sort((a, b) => a - b);
  const realReserves = reserves
    .filter((reserve) => !losts.includes(reserve))
    .sort((a, b) => a - b);

  const sadFriends = realLosts.filter((lost) => {
    const friendIndex = realReserves.findIndex(
      (reserve) => lost === reserve + 1 || lost === reserve - 1
    );
    if (friendIndex !== -1) {
      realReserves.splice(friendIndex, 1);
      return false;
    }
    return true;
  });

  return n - sadFriends.length;
}
