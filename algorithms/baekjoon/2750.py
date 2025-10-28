# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N = int(input())
    numbers = [int(input()) for _ in range(N)]
    numbers.sort()
    print("\n".join(map(str, numbers)))


solution()
