# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")

import math


def solution():
    N, M = map(int, input().split(" "))
    treeHeights = list(map(int, input().split(" ")))
    startHeight = 0
    endHeight = 1000000000 + 1
    maxHeight = 0
    while startHeight < endHeight:
        currentHeight = math.floor((startHeight + endHeight) / 2)
        total = 0
        for height in treeHeights:
            total += height - currentHeight if height >= currentHeight else 0
        if total > M:
            maxHeight = currentHeight
            startHeight = currentHeight + 1
        elif total < M:
            endHeight = currentHeight
        else:
            maxHeight = currentHeight
            break
    print(maxHeight)


solution()
