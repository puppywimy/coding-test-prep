# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    maxSize = 30

    # stack
    data = [None] * maxSize
    top = 0

    memory = [0] * maxSize

    errorFlag = False

    for character in list(input()):
        if character == "(" or character == "[":
            data[top] = character
            top += 1
        elif character == ")":
            if top and data[top - 1] == "(":
                if memory[top] > 0:
                    memory[top - 1] += 2 * memory[top]
                else:
                    memory[top - 1] += 2
                memory[top] = 0
                top -= 1
            else:
                errorFlag = True
                break
        elif character == "]":
            if top and data[top - 1] == "[":
                if memory[top] > 0:
                    memory[top - 1] += 3 * memory[top]
                else:
                    memory[top - 1] += 3
                memory[top] = 0
                top -= 1
            else:
                errorFlag = True
                break

    if errorFlag or top:
        print(0)
    else:
        print(memory[0])


solution()
