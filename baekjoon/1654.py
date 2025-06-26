# 제출 시 파일 입출력 부분 지우기

import sys
import math

sys.stdin = open("input", "r")


def solution():
    K, N = map(int, input().split(" "))
    lanCableLengths = [int(input()) for _ in range(K)]

    startLength = 1
    endLength = 2**31 - 1
    while startLength < endLength:
        # 마지막 "+ 1"은 탐색 범위를 절반으로 나누기 위함.
        middleLength = math.floor((startLength + endLength) / 2) + 1
        total = 0
        for length in lanCableLengths:
            total += math.floor(length / middleLength)
        if total >= N:
            startLength = middleLength
        else:
            endLength = middleLength - 1
    print(startLength)


solution()
