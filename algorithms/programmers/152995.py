def solution(scores):
    wanhoScore = scores[0]
    sortedScores = sorted(scores, key=lambda x: (-x[0], x[1]))
    groupNumber = sortedScores[0][0]
    groupMax = 0
    goodScores = []
    for i in range(len(sortedScores)):
        score = sortedScores[i]

        # 다음 그룹으로
        if groupNumber != score[0]:
            groupNumber = score[0]
            groupMax = max(groupMax, sortedScores[i - 1][1])

        if score[1] < groupMax:
            if score == wanhoScore:
                return -1
            continue
        goodScores.append(score)
    totalScores = [a + b for [a, b] in goodScores]
    sortedTotalScores = sorted(totalScores, reverse=True)
    wanhoTotalScore = wanhoScore[0] + wanhoScore[1]
    for i in range(len(sortedTotalScores)):
        totalScore = sortedTotalScores[i]
        if totalScore == wanhoTotalScore:
            return i + 1
