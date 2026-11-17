class Solution {
    fun minAbsoluteSumDiff(nums1: IntArray, nums2: IntArray): Int {
        val sortedNums1 = nums1.sorted()

        var max = 0
        var total = 0L
        for (i in 0 until nums1.size) {
            var start = 0
            var end = sortedNums1.size

            while (start < end) {
                val mid = (start + end) / 2
                val target = sortedNums1[mid]
                if (target > nums2[i]) {
                    end = mid
                } else if (target < nums2[i]) {
                    start = mid + 1
                } else end = mid
            }
            val nearestNum = when {
                start == 0 -> sortedNums1[0]
                start == sortedNums1.size -> sortedNums1[sortedNums1.size - 1]
                nums2[i] - sortedNums1[start - 1] < sortedNums1[start] - nums2[i] -> sortedNums1[start - 1]
                else -> sortedNums1[start]
            }

            val prev = abs(nums1[i] - nums2[i])
            val next = abs(nearestNum - nums2[i])

            if (max < prev - next) max = prev - next

            total += prev
        }

        return ((total - max) % 1_000_000_007).toInt()
    }
}