# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N = int(input())

    # -
    isUsedColumn = [False for _ in range(N)]
    # /
    isUsedSlash = [False for _ in range(2 * N - 1)]
    # \
    isUsedBackslash = [False for _ in range(2 * N - 1)]

    count = 0

    def recursive(rowIndex):
        nonlocal count

        if rowIndex == N:
            count += 1
            return

        for i in range(N):
            columnIndex = i
            slashIndex = i + rowIndex
            backslashIndex = (i - rowIndex) + (N - 1)
            if not (
                isUsedColumn[columnIndex]
                or isUsedSlash[slashIndex]
                or isUsedBackslash[backslashIndex]
            ):
                isUsedColumn[columnIndex] = True
                isUsedSlash[slashIndex] = True
                isUsedBackslash[backslashIndex] = True
                recursive(rowIndex + 1)
                isUsedColumn[columnIndex] = False
                isUsedSlash[slashIndex] = False
                isUsedBackslash[backslashIndex] = False

    recursive(0)
    print(count)


solution()
