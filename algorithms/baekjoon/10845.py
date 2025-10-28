# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    queueArray = [None] * 10000
    _front = 0
    _back = 0

    def size():
        return _back - _front

    def empty():
        return 0 if size() else 1

    def pop():
        nonlocal _front
        if empty():
            return -1
        temp = queueArray[_front]
        _front += 1
        return temp

    def push(X):
        nonlocal _back
        queueArray[_back] = X
        _back += 1

    def front():
        return -1 if empty() else queueArray[_front]

    def back():
        return -1 if empty() else queueArray[_back - 1]

    N = int(input())
    output = []
    for _ in range(N):
        command = input().split(" ")
        if command[0] == "push":
            push(int(command[1]))
        elif command[0] == "pop":
            output.append(pop())
        elif command[0] == "size":
            output.append(size())
        elif command[0] == "empty":
            output.append(empty())
        elif command[0] == "front":
            output.append(front())
        elif command[0] == "back":
            output.append(back())
    print("\n".join(map(str, output)))


solution()
