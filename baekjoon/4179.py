# 제출 시 파일 입출력 부분 지우기

import sys
from collections import deque

sys.stdin = open("input", "r")


def solution():
    n, m = map(int, input().split())
    fMap = [["." for _ in range(m)] for _ in range(n)]
    jMap = [["." for _ in range(m)] for _ in range(n)]
    fQueue = deque([])
    jQueue = deque([])
    for i in range(n):
        row = list(input())
        for j in range(m):
            element = row[j]
            if element == "#":
                fMap[i][j] = "#"
                jMap[i][j] = "#"
            if element == "F":
                fMap[i][j] = 0
                fQueue.append([i, j])
            if element == "J":
                jMap[i][j] = 0
                jQueue.append([i, j])
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    while len(fQueue):
        x, y = fQueue.popleft()
        for i in range(4):
            newX = x + dx[i]
            newY = y + dy[i]
            if not ((0 <= newX and newX < n) and (0 <= newY and newY < m)):
                continue
            if not (fMap[newX][newY] == "."):
                continue
            fMap[newX][newY] = fMap[x][y] + 1
            fQueue.append([newX, newY])
    while len(jQueue):
        x, y = jQueue.popleft()
        for i in range(4):
            newX = x + dx[i]
            newY = y + dy[i]
            if not ((0 <= newX and newX < n) and (0 <= newY and newY < m)):
                return jMap[x][y] + 1
            # 주의: J와 F가 만날 수 없는 경우도 있어 fMap[newX][newY] == '.'인지 확인해 주어야 함.
            if not (
                jMap[newX][newY] == "."
                and (fMap[newX][newY] == "." or fMap[newX][newY] > jMap[x][y] + 1)
            ):
                continue
            jMap[newX][newY] = jMap[x][y] + 1
            jQueue.append([newX, newY])
    return "IMPOSSIBLE"


print(solution())
