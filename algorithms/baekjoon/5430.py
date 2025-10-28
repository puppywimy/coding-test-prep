# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    maxSize = 200000

    data = [None] * maxSize
    head = maxSize // 2
    tail = maxSize // 2

    def resetDeque():
        nonlocal data, head, tail
        data = [None] * maxSize
        head = maxSize // 2
        tail = maxSize // 2

    def empty():
        return not (tail - head)

    def pushBack(x):
        nonlocal tail
        data[tail] = x
        tail += 1

    def popFront():
        nonlocal head
        head += 1

    def popBack():
        nonlocal tail
        tail -= 1

    T = int(input())
    output = []
    for _ in range(T):
        resetDeque()

        commands = list(input())
        input()
        rawDefaultValuesString = input()
        strippedDefaultValuesString = rawDefaultValuesString.strip("[]")
        defaultValues = (
            []
            if strippedDefaultValuesString == ""
            else list(map(int, strippedDefaultValuesString.split(",")))
        )
        # 덱에 defaultValues 삽입
        head -= len(defaultValues) // 2
        tail -= len(defaultValues) // 2
        for value in defaultValues:
            pushBack(value)

        isReversed = False
        errorFlag = False

        for command in commands:
            if command == "R":
                isReversed = not isReversed
            elif command == "D":
                if empty():
                    errorFlag = True
                    break
                if isReversed:
                    popBack()
                else:
                    popFront()

        if errorFlag:
            output.append("error")
        else:
            output.append(
                f"[{','.join(map(str, reversed(data[head:tail]) if isReversed else data[head:tail]))}]"
            )
    print("\n".join(output))


solution()
