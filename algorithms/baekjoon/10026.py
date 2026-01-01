# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")

from collections import deque


def solution():
    N = int(input())
    picture = [list(input()) for _ in range(N)]

    def printAreaCounts():
        areaCounts = 0
        queue = deque([])
        visited = [[False for _ in row] for row in picture]
        dx = [-1, 1, 0, 0]
        dy = [0, 0, -1, 1]
        for startX in range(N):
            for startY in range(N):
                if visited[startX][startY] == True:
                    continue
                color = picture[startX][startY]
                queue.append((startX, startY))
                visited[startX][startY] = True
                while len(queue):
                    x, y = queue.popleft()
                    for i in range(4):
                        newX, newY = x + dx[i], y + dy[i]
                        if not ((0 <= newX and newX < N) and (0 <= newY and newY < N)):
                            continue
                        if visited[newX][newY]:
                            continue
                        if picture[newX][newY] != color:
                            continue
                        queue.append((newX, newY))
                        visited[newX][newY] = True
                areaCounts += 1
        print(areaCounts)

    printAreaCounts()
    picture = [[color if color == "B" else "X" for color in row] for row in picture]
    printAreaCounts()


solution()
