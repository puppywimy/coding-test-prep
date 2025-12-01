def solution(numbers, target):
    count = 0

    def recursive(index, total):
        nonlocal count

        # BC
        if index == len(numbers):
            if total == target:
                count += 1
            return

        # 재귀함수 호출
        recursive(index + 1, total + numbers[index])
        recursive(index + 1, total - numbers[index])

    recursive(0, 0)
    return count
