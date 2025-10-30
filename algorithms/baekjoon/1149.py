# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N = int(input())
    prices = []
    for _ in range(N):
        prices.append(list(map(int, input().split(" "))))
    table = [[None, None, None] for _ in range(N)]
    table[0] = prices[0]
    for i in range(1, N):
        table[i][0] = min(table[i - 1][1], table[i - 1][2]) + prices[i][0]
        table[i][1] = min(table[i - 1][0], table[i - 1][2]) + prices[i][1]
        table[i][2] = min(table[i - 1][0], table[i - 1][1]) + prices[i][2]
    print(min(table[N - 1][0], table[N - 1][1], table[N - 1][2]))


solution()
