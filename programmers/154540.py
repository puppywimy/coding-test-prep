from collections import deque


def solution(maps):
    maps = [
        [element if element == "X" else int(element) for element in list(row)]
        for row in maps
    ]
    N, M = len(maps), len(maps[0])
    islands = []
    for i in range(N):
        for j in range(M):
            if maps[i][j] == "X" or maps[i][j] == 0:
                continue
            totalFoods = maps[i][j]
            queue = deque([[i, j]])
            maps[i][j] = 0
            dx = [-1, 1, 0, 0]
            dy = [0, 0, -1, 1]
            while len(queue):
                x, y = queue.popleft()
                for k in range(4):
                    newX, newY = x + dx[k], y + dy[k]
                    if (
                        not (0 <= newX and newX < N and 0 <= newY and newY < M)
                        or maps[newX][newY] == "X"
                        or maps[newX][newY] == 0
                    ):
                        continue
                    totalFoods += maps[newX][newY]
                    queue.append([newX, newY])
                    maps[newX][newY] = 0
            islands.append(totalFoods)
    islands.sort()
    return islands if len(islands) else [-1]
