# 제출 시 파일 입출력 부분 지우기

import sys
import math

sys.stdin = open("input", "r")


def solutionWithSorting():
    N = int(input())
    numbers = list(map(int, input().split(" ")))
    M = int(input())
    targetNumberStrings = input().split(" ")
    targetNumberDatas = [
        {"i": i, "number": int(targetNumberStrings[i]), "foundInNumbers": False}
        for i in range(len(targetNumberStrings))
    ]
    numbers.sort()
    targetNumberDatas.sort(key=lambda x: x["number"])
    cursor = 0
    for targetNumberData in targetNumberDatas:
        while cursor < len(numbers):
            if numbers[cursor] == targetNumberData["number"]:
                targetNumberData["foundInNumbers"] = True
                break
            elif numbers[cursor] > targetNumberData["number"]:
                break
            else:
                cursor += 1
    targetNumberDatas.sort(key=lambda x: x["i"])

    print(
        "\n".join(
            map(
                lambda targetNumberData: (
                    "1" if targetNumberData["foundInNumbers"] else "0"
                ),
                targetNumberDatas,
            )
        )
    )


def solutionWithBinarySearch():
    def binarySearch(array, target):
        startIndex = 0
        endIndex = len(array) - 1
        while startIndex <= endIndex:
            middleIndex = math.floor((startIndex + endIndex) / 2)
            if array[middleIndex] == target:
                return middleIndex
            elif array[middleIndex] > target:
                endIndex = middleIndex - 1
            else:
                startIndex = middleIndex + 1
        return -1

    N = int(input())
    numbers = list(map(int, input().split(" ")))
    M = int(input())
    targetNumbers = list(map(int, input().split(" ")))
    numbers.sort()
    output = []
    for targetNumber in targetNumbers:
        output.append("1" if binarySearch(numbers, targetNumber) > -1 else "0")

    print("\n".join(output))


solutionWithBinarySearch()
