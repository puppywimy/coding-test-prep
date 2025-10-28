# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")

from collections import deque

M, N, H = map(int, input().split())
tomatoStorages = []
queue = deque([])
for i in range(H):
    tomatoStorage = []
    for j in range(N):
        tomatoRow = list(map(int, input().split()))
        for k in range(M):
            if tomatoRow[k] == 1:
                queue.append([i, j, k])
        tomatoStorage.append(tomatoRow)
    tomatoStorages.append(tomatoStorage)
dx = [0, 0, 0, 0, -1, 1]
dy = [0, 0, -1, 1, 0, 0]
dz = [-1, 1, 0, 0, 0, 0]
allTomatoesRipenedAt = 1
while len(queue):
    z, x, y = queue.popleft()  # 순서 확인
    for i in range(6):
        newX = x + dx[i]
        newY = y + dy[i]
        newZ = z + dz[i]
        if not (
            0 <= newX and newX < N and 0 <= newY and newY < M and 0 <= newZ and newZ < H
        ):
            continue
        if tomatoStorages[newZ][newX][newY] != 0:
            continue
        ripenedAt = tomatoStorages[z][x][y] + 1
        if allTomatoesRipenedAt < ripenedAt:
            allTomatoesRipenedAt = ripenedAt
        tomatoStorages[newZ][newX][newY] = ripenedAt
        queue.append([newZ, newX, newY])
for tomatoStorage in tomatoStorages:
    for tomatoRow in tomatoStorage:
        for tomato in tomatoRow:
            if tomato == 0:
                allTomatoesRipenedAt = 0

print(allTomatoesRipenedAt - 1)
