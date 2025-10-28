# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    A, B, C = int(input()), int(input()), int(input())
    numberCharacters = list(str(A * B * C))
    frequencies = [0 for _ in range(10)]
    for numberCharacter in numberCharacters:
        frequencies[int(numberCharacter)] += 1
    print("\n".join(map(str, frequencies)))


solution()
