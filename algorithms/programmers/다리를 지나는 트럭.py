from collections import deque


def solution(bridge_length, weight, truck_weights):
    bridgeQueue = deque([0 for _ in range(bridge_length)])
    bridgeWeight = 0
    trucksQueue = deque(truck_weights)
    exitedTruckCount = 0
    time = 0
    while exitedTruckCount < len(truck_weights):
        exitingTruck = bridgeQueue.popleft()
        bridgeWeight -= exitingTruck
        if exitingTruck:
            exitedTruckCount += 1
        if len(trucksQueue) and bridgeWeight + trucksQueue[0] <= weight:
            enteringTruck = trucksQueue.popleft()
            bridgeQueue.append(enteringTruck)
            bridgeWeight += enteringTruck
        else:
            bridgeQueue.append(0)
        time += 1
    return time
