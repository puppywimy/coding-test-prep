# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    maxWineCounts = 10000

    N = int(input())
    amounts = [int(input()) for _ in range(N)]

    if N == 1:
        print(amounts[0])
        return

    table = [None] * N
    table[0] = [0, amounts[0], amounts[0]]
    table[1] = [amounts[0], amounts[1], amounts[0] + amounts[1]]
    for i in range(2, N):
        table[i] = [
            max(table[i - 1]),
            table[i - 1][0] + amounts[i],
            table[i - 1][1] + amounts[i],
        ]

    print(max(table[N - 1]))


solution()
