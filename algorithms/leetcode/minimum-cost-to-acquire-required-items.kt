class Solution {
    fun minimumCost(cost1: Int, cost2: Int, costBoth: Int, need1: Int, need2: Int): Long {
        if (costBoth < cost1 + cost2) {
            if (need1 > need2) return need2.toLong() * costBoth + (need1 - need2).toLong() * minOf(costBoth, cost1)
            else return need1.toLong() * costBoth + (need2 - need1).toLong() * minOf(costBoth, cost2)
        }
        else return need1.toLong() * minOf(costBoth, cost1) + need2.toLong() * minOf(costBoth, cost2)
    }
}