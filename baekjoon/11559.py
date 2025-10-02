# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")

from collections import deque


def solution():
    N, M = 12, 6
    colorCodes = ["R", "G", "B", "P", "Y"]
    board = list(map(lambda _: list(input()), range(N)))
    combo = 0
    while True:
        # Find Combo and Destroy
        queue = deque([])
        visited = list(map(lambda row: list(map(lambda _: False, row)), board))
        dx = [0, 0, -1, 1]
        dy = [-1, 1, 0, 0]
        masses = []
        for colorCode in colorCodes:
            for i in range(N):
                for j in range(M):
                    if visited[i][j] or board[i][j] != colorCode:
                        continue
                    queue.append([i, j])
                    visited[i][j] = True
                    mass = [[i, j]]
                    while len(queue):
                        y, x = queue.popleft()
                        for k in range(4):
                            newY, newX = y + dy[k], x + dx[k]
                            if (
                                not (0 <= newY and newY < N and 0 <= newX and newX < M)
                                or visited[newY][newX]
                                or board[newY][newX] != colorCode
                            ):
                                continue
                            queue.append([newY, newX])
                            visited[newY][newX] = True
                            mass.append([newY, newX])
                    masses.append(mass)
        isComboExisting = False
        for mass in masses:
            if len(mass) < 4:
                continue
            if not isComboExisting:
                isComboExisting = True
            for y, x in mass:
                board[y][x] = "."
        if isComboExisting:
            combo += 1
        else:
            break

        # Squash
        def squash(board):
            newBoard = list(map(lambda row: list(map(lambda _: ".", row)), board))
            for j in range(M):
                lastIndex = N - 1
                for i in range(N - 1, -1, -1):
                    if board[i][j] == ".":
                        continue
                    newBoard[lastIndex][j] = board[i][j]
                    lastIndex -= 1
            return newBoard

        board = squash(board)
    print(combo)


solution()
