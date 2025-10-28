# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    T = int(input())
    for _ in range(T):
        N, M = map(int, input().split(" "))
        numerator = 1
        for i in range(M, M - N, -1):
            numerator *= i
        denominator = 1
        for i in range(N, 1, -1):
            denominator *= i
        print(int(numerator / denominator))


solution()
