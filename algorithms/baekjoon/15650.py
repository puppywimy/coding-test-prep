# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N, M = map(int, input().split(" "))
    isUsed = [False for _ in range(N + 1)]  # 1-based indexing

    def recursive(count, lastNumber):
        if count == M:
            selections = []
            for i in range(N + 1):
                if isUsed[i]:
                    selections.append(i)
            print(" ".join(map(str, selections)))
            return

        restCount = M - 1 - count
        for number in range(lastNumber + 1, N + 1 - restCount):
            isUsed[number] = True
            recursive(count + 1, number)
            isUsed[number] = False

    recursive(0, 0)


solution()
