# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")

T = int(input())
testCases = []
for _ in range(T):
    testCases.append(int(input()))

table = [None for _ in range(101)]
table[1] = 1
table[2] = 1
table[3] = 1
table[4] = 2
table[5] = 2
for i in range(6, len(table)):
    table[i] = table[i - 1] + table[i - 5]

for N in testCases:
    print(table[N])
