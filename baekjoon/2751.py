# 제출 시 파일 입출력 부분 지우기

import math
import sys

sys.stdin = open("input", "r")

N = int(input())
array = [int(input()) for _ in range(N)]


def mergeSort(array):
    _array = array[:]
    tempArray = [None] * len(_array)

    # endIndex는 포함하지 않음.
    def _merge(startIndex, endIndex):
        middleIndex = math.floor((startIndex + endIndex) / 2)
        cursor1 = startIndex
        cursor2 = middleIndex
        for i in range(startIndex, endIndex):
            if cursor1 == middleIndex:
                tempArray[i] = _array[cursor2]
                cursor2 += 1
            elif cursor2 == endIndex:
                tempArray[i] = _array[cursor1]
                cursor1 += 1
            elif _array[cursor1] <= _array[cursor2]:
                tempArray[i] = _array[cursor1]
                cursor1 += 1
            else:
                tempArray[i] = _array[cursor2]
                cursor2 += 1
        for i in range(startIndex, endIndex):
            _array[i] = tempArray[i]

    # endIndex는 포함하지 않음.
    def _mergeSort(startIndex, endIndex):
        if endIndex - startIndex == 1:
            return
        middleIndex = math.floor((startIndex + endIndex) / 2)
        _mergeSort(startIndex, middleIndex)
        _mergeSort(middleIndex, endIndex)
        _merge(startIndex, endIndex)

    _mergeSort(0, len(_array))

    return _array


print("\n".join(map(str, mergeSort(array))))
