def solution(progresses, speeds):
    taskCount = len(progresses)

    cursor = 0
    deploymentCounts = []
    while cursor < taskCount:
        for i in range(taskCount):
            if progresses[i] >= 100:
                continue
            progresses[i] += speeds[i]
        deploymentCount = 0
        while cursor < taskCount and progresses[cursor] >= 100:
            deploymentCount += 1
            cursor += 1
        if deploymentCount > 0:
            deploymentCounts.append(deploymentCount)
    return deploymentCounts
