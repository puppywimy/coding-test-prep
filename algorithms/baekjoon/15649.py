# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N, M = map(int, input().split(" "))
    instances = [i + 1 for i in range(N)]
    isUsed = [False for _ in range(N)]
    result = [None for _ in range(M)]
    output = []

    def recursive(index):
        if index == M:
            output.append(" ".join(map(str, result)))
            return

        for i in range(N):
            if not isUsed[i]:
                result[index] = instances[i]
                isUsed[i] = True
                recursive(index + 1)
                isUsed[i] = False

    recursive(0)
    print("\n".join(output))


solution()
