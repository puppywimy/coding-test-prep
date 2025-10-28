def solution(n):
    table = [None, 1, 2]
    for i in range(3, n + 1):
        table.append((table[i - 1] + table[i - 2]) % 1000000007)
    return table[n]