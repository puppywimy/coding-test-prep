def solution(citations):
    citations.sort()
    h = 0
    cursor = 0
    while cursor <= h and h <= len(citations) - cursor:
        if h > citations[cursor]:
            cursor += 1
        else:
            h += 1
    return h - 1
