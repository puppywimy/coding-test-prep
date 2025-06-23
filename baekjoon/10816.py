# 제출 시 파일 입출력 부분 지우기

import sys
import math

sys.stdin = open("input", "r")


def solution():
    def searchLowerIndex(array, target):
        startIndex = 0
        endIndex = len(array)
        while startIndex < endIndex:
            middleIndex = math.floor((startIndex + endIndex) / 2)
            if array[middleIndex] < target:
                startIndex = middleIndex + 1
            else:
                endIndex = middleIndex
        return startIndex

    def searchUpperIndex(array, target):
        startIndex = 0
        endIndex = len(array)
        while startIndex < endIndex:
            middleIndex = math.floor((startIndex + endIndex) / 2)
            if array[middleIndex] <= target:
                startIndex = middleIndex + 1
            else:
                endIndex = middleIndex
        return startIndex

    N = int(input())
    numbers = list(map(int, input().split(" ")))
    M = int(input())
    targetNumbers = list(map(int, input().split(" ")))
    numbers.sort()
    output = []
    for targetNumber in targetNumbers:
        output.append(
            str(
                searchUpperIndex(numbers, targetNumber)
                - searchLowerIndex(numbers, targetNumber)
            )
        )

    print(" ".join(output))


solution()
