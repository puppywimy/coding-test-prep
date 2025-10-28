def solution(arr):
    total = 0
    for number in arr:
        total += number
    return total / len(arr)
