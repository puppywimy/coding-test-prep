def solution(k, ranges):
    result = []

    # 1. 우박 수열 구하기
    f = []
    i = 0
    while k > 1:
        f.append(k)
        if k % 2:
            k = k * 3 + 1
        else:
            k = k // 2
        i += 1
    f.append(k)

    # 2. b 양수 변환 및 범위 Validation
    for [a, b] in ranges:
        b += len(f) - 1
        if a < b:
            # 3. 정적분 결과 구하기
            total = 0
            for x in range(a, b):
                x1 = x
                x2 = x + 1
                if f[x1] == f[x2]:
                    total += f[x1]
                    continue
                bigNumber = f[x1] if f[x1] > f[x2] else f[x2]
                smallNumber = f[x2] if f[x1] > f[x2] else f[x1]
                triangle = (bigNumber - smallNumber) / 2
                square = smallNumber
                total += triangle + square
            result.append(total)
        elif a > b:
            result.append(-1)
        else:
            result.append(0)
    return result
