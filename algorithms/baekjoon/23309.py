# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N, M = map(int, input().split(" "))
    existingStations = list(map(int, input().split(" ")))
    commands = [input() for _ in range(M)]
    stationData = [None for _ in range(1000001)]
    outputs = []
    for i in range(len(existingStations)):
        previousIndex = None
        nextIndex = None
        if i > 0:
            previousIndex = existingStations[i - 1]
        if i < len(existingStations) - 1:
            nextIndex = existingStations[i + 1]
        if i == 0:
            previousIndex = existingStations[len(existingStations) - 1]
        if i == len(existingStations) - 1:
            nextIndex = existingStations[0]
        stationData[existingStations[i]] = {
            "previousIndex": previousIndex,
            "nextIndex": nextIndex,
        }
    for command in commands:
        keyword, *rawParams = command.split(" ")
        params = list(map(int, rawParams))
        if keyword == "BN":
            i, j = params

            print(stationData[i]["nextIndex"])

            # 이미 설립한 역 다시 설립하지 않기
            if stationData[j] != None:
                continue

            stationData[j] = {
                "previousIndex": i,
                "nextIndex": stationData[i]["nextIndex"],
            }

            stationData[stationData[i]["nextIndex"]]["previousIndex"] = j
            stationData[i]["nextIndex"] = j
        elif keyword == "BP":
            i, j = params

            print(stationData[i]["nextIndex"])

            # 이미 설립한 역 다시 설립하지 않기
            if stationData[j] != None:
                continue

            stationData[j] = {
                "previousIndex": stationData[i]["previousIndex"],
                "nextIndex": i,
            }

            stationData[stationData[i]["previousIndex"]]["nextIndex"] = j
            stationData[i]["previousIndex"] = j
        elif keyword == "CN":
            i = params[0]

            nextIndex = stationData[i]["nextIndex"]
            nextNextIndex = stationData[nextIndex]["nextIndex"]
            stationData[nextNextIndex]["previousIndex"] = i
            stationData[i]["nextIndex"] = nextNextIndex
            stationData[nextIndex] = None

            print(nextIndex)
        elif keyword == "CP":
            i = params[0]

            previousIndex = stationData[i]["previousIndex"]
            previousPreviousIndex = stationData[previousIndex]["previousIndex"]
            stationData[previousPreviousIndex]["nextIndex"] = i
            stationData[i]["previousIndex"] = previousPreviousIndex
            stationData[previousIndex] = None

            print(previousIndex)


solution()
