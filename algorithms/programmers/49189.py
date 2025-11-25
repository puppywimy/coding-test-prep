from collections import deque


def solution(n, edge):
    neighbors = [[] for i in range(n)]
    distances = [-1 for i in range(n)]
    for a, b in edge:
        neighbors[a - 1].append(b - 1)
        neighbors[b - 1].append(a - 1)

    # BFS
    queue = deque([0])
    distances[0] = 0
    while len(queue):
        currentNode = queue.popleft()
        for neighbor in neighbors[currentNode]:
            if distances[neighbor] != -1:
                continue
            queue.append(neighbor)
            distances[neighbor] = distances[currentNode] + 1

    sortedDistances = sorted(distances, reverse=True)
    previousDistance = sortedDistances[0]
    count = 1
    for i in range(1, n):
        if previousDistance != sortedDistances[i]:
            break
        count += 1
    return count
