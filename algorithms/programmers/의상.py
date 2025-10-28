def solution(clothes):
    closet = {}
    for [clothName, clothType] in clothes:
        if clothType in closet:
            closet[clothType] += 1
        else:
            closet[clothType] = 1
    numberOfCombinations = 1
    for value in closet.values():
        numberOfCombinations *= value + 1
    numberOfCombinations -= 1  # 아무것도 안 입는 경우, 이미 코니는 변태다
    return numberOfCombinations
