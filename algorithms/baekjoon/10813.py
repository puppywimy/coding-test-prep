# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N, M = map(int, input().split(" "))
    balls = [i for i in range(N + 1)]  # 1-based indexing
    for _ in range(M):
        i, j = map(int, input().split(" "))
        balls[i], balls[j] = balls[j], balls[i]
    print(" ".join(map(str, balls[1:])))


solution()
