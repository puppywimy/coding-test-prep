# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")

from collections import deque


def solution():
    coloredPaperCount = int(input())
    drawingPaper = [[0 for _ in range(100)] for _ in range(100)]
    perimeter = 0

    # 도화지에 색종이 채우기
    for _ in range(coloredPaperCount):
        firstI, firstJ = map(int, input().split(" "))
        for i in range(firstI, firstI + 10):
            for j in range(firstJ, firstJ + 10):
                drawingPaper[i][j] = 1

    # BFS로 둘레 구하기
    for i in range(100):
        for j in range(100):
            if drawingPaper[i][j] == 0 or drawingPaper[i][j] == 2:
                continue
            queue = deque([[i, j]])
            drawingPaper[i][j] = 2
            dx = [-1, 1, 0, 0]
            dy = [0, 0, -1, 1]
            while len(queue):
                x, y = queue.popleft()
                for k in range(4):
                    newX, newY = x + dx[k], y + dy[k]
                    if (
                        not (0 <= newX and newX < 100 and 0 <= newY and newY < 100)
                        or drawingPaper[newX][newY] == 0
                    ):
                        perimeter += 1
                        continue
                    if drawingPaper[newX][newY] == 2:
                        continue
                    queue.append([newX, newY])
                    drawingPaper[newX][newY] = 2

    print(perimeter)


solution()
