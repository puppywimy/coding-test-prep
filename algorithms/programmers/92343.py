from collections import deque

def solution(info, edges):
    tree = [{'parent': None, 'children': [], 'type': info[i]} for i in range(len(info))]
    for [parent, child] in edges:
        tree[parent]['children'].append(child)
        tree[child]['parent'] = parent
    queue = deque([0])
    visited = [False for _ in info]
    sheepCount, wolfCount = 1, 0
    while len(queue):
        node = queue.popleft()
        for child in tree[node]['child']:
            if visited[child]:
                continue
            if tree[child]['type'] == 1:
                sheepCount += 1
                queue.append(child)
                visited[child] = True
            elif tree[child]['type'] == 0: