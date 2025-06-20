# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")

T = int(input())
output = []
for _ in range(T):
    N = int(input())
    grades = [list(map(int, input().split(" "))) for _ in range(N)]
    grades.sort(key=lambda x: x[0])  # 먼저 서류 성적 순으로 정렬
    count = 0
    minInterviewGrade = N
    for grade in grades:
        if grade[1] <= minInterviewGrade:
            minInterviewGrade = grade[1]
            count += 1
    output.append(str(count))

print("\n".join(output))
