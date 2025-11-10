# 제출 시 파일 입출력 부분 지우기

import sys, heapq

sys.stdin = open("input", "r")


def solution():
    N = int(input())
    heap = [int(input()) for _ in range(N)]
    heapq.heapify(heap)
    totalComparisonCount = 0
    while len(heap) > 1:
        comparisonCount = heapq.heappop(heap) + heapq.heappop(heap)
        totalComparisonCount += comparisonCount
        heapq.heappush(heap, comparisonCount)
    print(totalComparisonCount)


solution()
