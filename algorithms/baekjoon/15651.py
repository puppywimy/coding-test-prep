# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N, M = map(int, input().split(" "))
    output = [-1] * M

    def recursive(index):
        if index >= M:
            print(" ".join(map(str, output)))
            return

        for i in range(N):
            output[index] = i + 1
            recursive(index + 1)

    recursive(0)


solution()
