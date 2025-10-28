def solution(s):
    pCount = 0
    yCount = 0
    for character in s.lower():
        if character == 'p': pCount += 1
        if character == 'y': yCount += 1
    return pCount == yCount