class Solution {
    fun minimumRefill(plants: IntArray, capacityA: Int, capacityB: Int): Int {
        var refillCount = 0
        var canA = capacityA
        var canB = capacityB
        for (i in 0 until plants.size / 2) {
            if (plants[i] > canA) {
                refillCount++
                canA = capacityA - plants[i]
            } else {
                canA -= plants[i]
            }

            if (plants[plants.size - 1 - i] > canB) {
                refillCount++
                canB = capacityB - plants[plants.size - 1 - i]
            } else {
                canB -= plants[plants.size - 1 - i]
            }
        }
        if (
            plants.size % 2 != 0 &&
            plants[plants.size / 2] > maxOf(canA, canB)
        ) refillCount++
        return refillCount
    }
}