# 제출 시 파일 입출력 부분 지우기

import sys
from collections import deque

sys.stdin = open("input", "r")


def solution():
    N, K = map(int, input().split())
    # 주의: N과 K가 같은 경우
    if N == K:
        return 0
    table = [-1 for _ in range(100001)]
    table[N] = 0
    queue = deque([N])
    while len(queue):
        index = queue.popleft()
        newIndices = [index + 1, index - 1, 2 * index]
        for newIndex in newIndices:
            if not (0 <= newIndex and newIndex < len(table)):
                continue
            if table[newIndex] != -1:
                continue
            if newIndex == K:
                return table[index] + 1
            table[newIndex] = table[index] + 1
            queue.append(newIndex)


print(solution())
