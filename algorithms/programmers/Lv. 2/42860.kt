class Solution {
    fun solution(name: String): Int {
        val costs = mutableListOf<Int>()
        for (c in name) {
            val cost = minOf(c - 'A', 26 - (c - 'A'))
            costs.add(cost)
        }
        
        var last = -1
        var rightEnd = 0
        var leftEnd = costs.size - 1
        var min = costs.size - 1
        for (i in 0 until costs.size) {
            if (costs[i] == 0 && last != 0) {
                rightEnd = maxOf(0, i - 1)
            } else if (costs[i] != 0 && last == 0) {
                leftEnd = costs.size - i
                val movingCost = if (rightEnd > leftEnd) {
                    rightEnd + 2 * leftEnd
                } else {
                    leftEnd + 2 * rightEnd
                }
                if (min > movingCost) min = movingCost
            }
            last = costs[i]
        }
        if (last == 0) {
            leftEnd = 0
            val movingCost = if (rightEnd > leftEnd) {
                rightEnd + 2 * leftEnd
            } else {
                leftEnd + 2 * rightEnd
            }
            if (min > movingCost) min = movingCost
        }
        
        var total = min
        for (cost in costs) {
            total += cost
        }
        
        return total
    }
}