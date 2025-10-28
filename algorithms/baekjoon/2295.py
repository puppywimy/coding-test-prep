# 제출 시 파일 입출력 부분 지우기

import sys
from bisect import bisect_left

sys.stdin = open("input", "r")


def solution():
    N = int(input())
    numbers = []
    for _ in range(N):
        numbers.append(int(input()))
    numbers = list(set(numbers))  # 집합이므로 중복 제거
    numbers.sort()
    twoNumbersSumSet = set()
    for i in range(len(numbers)):
        for j in range(i, len(numbers)):
            twoNumbersSumSet.add(numbers[i] + numbers[j])

    twoNumbersSums = list(twoNumbersSumSet)
    twoNumbersSums.sort()
    for i in range(len(numbers)):
        for j in range(len(numbers)):
            target = numbers[len(numbers) - 1 - i] - numbers[j]
            targetIndex = bisect_left(twoNumbersSums, target)
            if target == twoNumbersSums[targetIndex]:
                print(numbers[len(numbers) - 1 - i])
                return


solution()
