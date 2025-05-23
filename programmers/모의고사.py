def solution(answers):
    soopos = {
        "1": {"pattern": [1, 2, 3, 4, 5], "score": 0},
        "2": {"pattern": [2, 1, 2, 3, 2, 4, 2, 5], "score": 0},
        "3": {"pattern": [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], "score": 0},
    }

    for i in range(len(answers)):
        for key in soopos:
            pattern = soopos[key]["pattern"]
            if pattern[i % len(pattern)] == answers[i]:
                soopos[key]["score"] += 1

    result = list(soopos.items())
    result.sort(key=lambda x: -x[1]["score"])
    maxScore = result[0][1]["score"]
    result = list(filter(lambda x: x[1]["score"] == maxScore, result))
    result = list(map(lambda x: int(x[0]), result))
    result.sort()
    return result
