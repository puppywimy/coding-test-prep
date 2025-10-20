# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N, M = map(int, input().split(" "))
    sortedNumbers = sorted([int(input()) for _ in range(N)])
    pointer1 = 0
    pointer2 = 0
    minimum = sortedNumbers[-1] - sortedNumbers[0]
    while pointer2 < N:
        if sortedNumbers[pointer2] - sortedNumbers[pointer1] < M:
            pointer2 += 1
        elif sortedNumbers[pointer2] - sortedNumbers[pointer1] > M:
            if sortedNumbers[pointer2] - sortedNumbers[pointer1] < minimum:
                minimum = sortedNumbers[pointer2] - sortedNumbers[pointer1]
            pointer1 += 1
        else:
            print(M)
            return
    print(minimum)


solution()
