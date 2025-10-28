# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    defaultCharacters = list(input())
    M = int(input())
    commands = [input().split(" ") for _ in range(M)]

    characters = [None for _ in range(600001)]
    previousIndices = [None for _ in range(600001)]
    nextIndices = [None for _ in range(600001)]

    emptyIndex = len(defaultCharacters) + 1
    cursor = len(defaultCharacters)
    nextIndices[0] = 1
    for i in range(len(defaultCharacters)):
        characters[i + 1] = defaultCharacters[i]
        previousIndices[i + 1] = i
        nextIndices[i + 1] = i + 2
    nextIndices[len(defaultCharacters)] = None

    def insert(index, character):
        nonlocal emptyIndex
        nonlocal cursor
        characters[emptyIndex] = character
        previousIndices[emptyIndex] = index
        nextIndices[emptyIndex] = nextIndices[index]
        if nextIndices[index] != None:
            previousIndices[nextIndices[index]] = emptyIndex
        nextIndices[index] = emptyIndex
        cursor = emptyIndex
        emptyIndex += 1

    def erase(index):
        if index == 0:
            return
        nonlocal cursor
        if nextIndices[index] != None:
            previousIndices[nextIndices[index]] = previousIndices[index]
        nextIndices[previousIndices[index]] = nextIndices[index]
        cursor = previousIndices[index]

    for command in commands:
        if command[0] == "L":
            if previousIndices[cursor] != None:
                cursor = previousIndices[cursor]
        elif command[0] == "D":
            if nextIndices[cursor] != None:
                cursor = nextIndices[cursor]
        elif command[0] == "B":
            erase(cursor)
        else:
            insert(cursor, command[1])

    output = []
    cursor = nextIndices[0]
    while cursor != None:
        output.append(characters[cursor])
        cursor = nextIndices[cursor]

    print("".join(output))


solution()
