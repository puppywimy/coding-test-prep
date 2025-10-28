import heapq


def solution(scoville, K):
    heapq.heapify(scoville)
    count = 0
    # 주의: 처음부터 모든 스코빌 지수가 K 이상일 수 있음.
    if scoville[0] >= K:
        return count
    while len(scoville) > 1:
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        heapq.heappush(scoville, first + 2 * second)
        count += 1
        if scoville[0] >= K:
            return count
    return -1
