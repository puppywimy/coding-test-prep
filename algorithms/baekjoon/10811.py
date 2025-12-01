# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N, M = map(int, input().split(" "))
    baskets = list(range(1, N + 1))
    for _ in range(M):
        i, j = map(int, input().split(" "))
        baskets[i - 1 : j] = reversed(baskets[i - 1 : j])
    print(" ".join(map(str, baskets)))


solution()
