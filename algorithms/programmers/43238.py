from math import floor


def solution(n, times):
    startTime, endTime = 0, 1000**6 + 1
    while startTime < endTime:
        middleTime = floor((startTime + endTime) / 2)
        total = 0
        for count in [middleTime // time for time in times]:
            total += count

        if total < n:
            startTime = middleTime + 1
        else:
            endTime = middleTime
    return startTime
