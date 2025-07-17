# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    stackArray = [None] * 100000
    stackTopIndex = 0

    def push(x):
        nonlocal stackTopIndex
        stackArray[stackTopIndex] = x
        stackTopIndex += 1

    def pop():
        nonlocal stackTopIndex
        stackTopIndex -= 1

    K = int(input())
    for _ in range(K):
        number = int(input())
        if number:
            push(number)
        else:
            pop()
    total = 0
    for i in range(stackTopIndex):
        total += stackArray[i]
    print(total)


solution()
