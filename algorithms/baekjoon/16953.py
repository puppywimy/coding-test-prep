# 제출 시 파일 입출력 부분 지우기

import sys
from collections import deque

sys.stdin = open("input", "r")

A, B = map(int, input().split(" "))

dictionary = {}
dictionary[A] = 0
queue = deque([A])
while len(queue):
    number = queue.popleft()
    newNumber1 = number * 2
    newNumber2 = int(str(number) + "1")
    if newNumber1 <= B and not (newNumber1 in dictionary):
        dictionary[newNumber1] = dictionary[number] + 1
        queue.append(newNumber1)
    if newNumber2 <= B and not (newNumber2 in dictionary):
        dictionary[newNumber2] = dictionary[number] + 1
        queue.append(newNumber2)

print(
    dictionary[B] + 1 if B in dictionary else -1
)  # 출력 조건: 최솟값에 1을 더한 값 출력
