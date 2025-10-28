# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    data = [None] * 100000
    top = 0

    count = 0

    for character in list(input()):
        if character == "(":
            data[top] = character
            top += 1
        elif character == ")":
            if data[top - 1] == "(":
                if top == 1 or data[top - 2] == "(":
                    data[top - 1] = 1
                else:
                    top -= 1
                    data[top - 1] += 1
            else:
                count += data[top - 1] + 1
                top -= 1
                if top == 1 or data[top - 2] == "(":
                    data[top - 1] = data[top]
                else:
                    top -= 1
                    data[top - 1] += data[top + 1]

    print(count)


solution()
