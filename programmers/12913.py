def solution(land):
    table = [[None, None, None, None] for _ in range(len(land))]
    table[0] = land[0]
    for i in range(1, len(land)):
        table[i][0] = (
            max(table[i - 1][1], table[i - 1][2], table[i - 1][3]) + land[i][0]
        )
        table[i][1] = (
            max(table[i - 1][0], table[i - 1][2], table[i - 1][3]) + land[i][1]
        )
        table[i][2] = (
            max(table[i - 1][0], table[i - 1][1], table[i - 1][3]) + land[i][2]
        )
        table[i][3] = (
            max(table[i - 1][0], table[i - 1][1], table[i - 1][2]) + land[i][3]
        )
    return max(table[len(table) - 1])
