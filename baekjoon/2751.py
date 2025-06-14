# 제출 시 파일 입출력 부분 지우기

import math
import sys

sys.stdin = open("input", "r")

N = int(input())
array = [int(input()) for _ in range(N)]
tempArray = [None for _ in range(N)]


# endIndex는 포함하지 않음.
def merge(startIndex, endIndex):
    middleIndex = math.floor((startIndex + endIndex) / 2)
    cursor1 = startIndex
    cursor2 = middleIndex
    for i in range(startIndex, endIndex):
        if cursor1 == middleIndex:
            tempArray[i] = array[cursor2]
            cursor2 += 1
        elif cursor2 == endIndex:
            tempArray[i] = array[cursor1]
            cursor1 += 1
        elif array[cursor1] <= array[cursor2]:
            tempArray[i] = array[cursor1]
            cursor1 += 1
        else:
            tempArray[i] = array[cursor2]
            cursor2 += 1
    for i in range(startIndex, endIndex):
        array[i] = tempArray[i]


# endIndex는 포함하지 않음.
def mergeSort(startIndex, endIndex):
    if endIndex - startIndex == 1:
        return
    middleIndex = math.floor((startIndex + endIndex) / 2)
    mergeSort(startIndex, middleIndex)
    mergeSort(middleIndex, endIndex)
    merge(startIndex, endIndex)


mergeSort(0, N)

print("\n".join(map(str, array)))
