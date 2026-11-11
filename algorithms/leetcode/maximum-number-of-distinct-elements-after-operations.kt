class Solution {
    fun maxDistinctElements(nums: IntArray, k: Int): Int {
        val base = nums
            .map { it - k }
            .sorted()
            .toMutableList()

        var count = 1

        for (i in 1 until base.size) {
            if (base[i] > base[i - 1]) {
                count++
                continue
            } else if (base[i] == base[i - 1]) {
                if (base[i] + 1 > base[i] + 2 * k) continue
                else {
                    base[i]++
                    count++
                }
            } else {
                if (base[i - 1] + 1 > base[i] + 2 * k) {
                    base[i] = base[i - 1]
                    continue
                }
                else {
                    base[i] = base[i - 1] + 1
                    count++
                }
            }
        }

        return count
    }
}