# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    X = int(input().split()[1])
    print(" ".join(filter(lambda numberString: int(numberString) < X, input().split())))


solution()
