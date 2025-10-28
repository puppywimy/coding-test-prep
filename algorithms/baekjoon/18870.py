# 제출 시 파일 입출력 부분 지우기

import sys
from bisect import bisect_left

sys.stdin = open("input", "r")


def solution():
    input()
    originalNumbers = list(map(int, input().split(" ")))
    numbers = originalNumbers[:]
    numbers.sort()
    uniqueNumbers = []
    for i in range(len(numbers)):
        if i + 1 < len(numbers) and numbers[i] == numbers[i + 1]:
            continue
        uniqueNumbers.append(numbers[i])
    output = list(map(lambda x: str(bisect_left(uniqueNumbers, x)), originalNumbers))
    print(" ".join(output))


solution()
