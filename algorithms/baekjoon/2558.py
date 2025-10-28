# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")

A = int(input())
B = int(input())

print(A + B)
