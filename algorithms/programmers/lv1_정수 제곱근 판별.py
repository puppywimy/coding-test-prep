import math


def solution(n):
    for i in range(1, math.floor(math.sqrt(n)) + 1):
        if i * i == n:
            return (i + 1) * (i + 1)

    return -1
