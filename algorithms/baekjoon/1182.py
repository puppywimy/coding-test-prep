# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N, S = map(int, input().split(" "))
    numbers = list(map(int, input().split(" ")))
    count = 0

    def recursive(index, total):
        nonlocal count

        if index == N:
            if total == S:
                count += 1
            return

        recursive(index + 1, total)
        recursive(index + 1, total + numbers[index])

    recursive(0, 0)
    if S == 0:
        count -= 1
    print(count)


solution()
