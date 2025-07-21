# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    output = []
    while True:
        rawInput = input()
        if rawInput == ".":
            break

        data = [None] * 100
        top = 0

        errorFlag = False

        for character in list(rawInput):
            if character == "(" or character == "[":
                data[top] = character
                top += 1
            elif character == ")" or character == "]":
                if top == 0:
                    errorFlag = True
                    break
                elif character == ")" and data[top - 1] == "(":
                    top -= 1
                elif character == "]" and data[top - 1] == "[":
                    top -= 1
                else:
                    errorFlag = True
                    break
        if errorFlag:
            output.append("no")
        elif top > 0:
            output.append("no")
        else:
            output.append("yes")
    print("\n".join(output))


solution()
