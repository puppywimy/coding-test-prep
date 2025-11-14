import math


def solution(n, a, b):
    newA, newB = a, b
    for round in range(1, 20 + 1):
        newA, newB = math.ceil(newA / 2), math.ceil(newB / 2)
        if newA == newB:
            return round
