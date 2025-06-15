# 제출 시 파일 입출력 부분 지우기

import math
import random
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


def quickSort(array):
    _array = array[:]

    # endIndex는 포함하지 않음.
    def _quickSort(startIndex, endIndex):
        if startIndex == len(_array) or endIndex - startIndex <= 1:
            return
        pivotIndex = random.randrange(startIndex, endIndex)
        _array[pivotIndex], _array[startIndex] = _array[startIndex], _array[pivotIndex]
        pivotIndex = startIndex
        cursor1 = startIndex + 1
        cursor2 = endIndex - 1
        while cursor1 - cursor2 < 1:
            if (
                _array[cursor1] > _array[pivotIndex]
                and _array[cursor2] < _array[pivotIndex]
            ):
                _array[cursor1], _array[cursor2] = _array[cursor2], _array[cursor1]
            if _array[cursor1] <= _array[pivotIndex]:
                cursor1 += 1
            if _array[cursor2] >= _array[pivotIndex]:
                cursor2 -= 1
        _array[pivotIndex], _array[cursor2] = _array[cursor2], _array[pivotIndex]
        _quickSort(startIndex, cursor2)
        _quickSort(cursor2 + 1, endIndex)

    _quickSort(0, len(_array))
    return _array


print("\n".join(map(str, quickSort(array))))
