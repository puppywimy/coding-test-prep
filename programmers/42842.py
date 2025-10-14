import math


def solution(brown, yellow):
    for innerHeight in range(1, math.floor(math.sqrt(yellow)) + 1):
        if yellow % innerHeight != 0:
            continue
        innerWidth = yellow // innerHeight
        width = innerWidth + 2
        height = innerHeight + 2
        border = (width + height - 2) * 2
        if border == brown:
            return [width, height]
