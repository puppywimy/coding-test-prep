# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")

input()
distances = list(map(int, input().split()))
prices = list(map(int, input().split()))

minPrice = prices[0]
cumulativeDistance = 0
minTotal = 0
for i in range(len(distances)):
    cumulativeDistance += distances[i]
    if minPrice <= prices[i + 1]:
        continue
    minTotal += minPrice * cumulativeDistance
    cumulativeDistance = 0
    minPrice = prices[i + 1]
minTotal += minPrice * cumulativeDistance

print(minTotal)
