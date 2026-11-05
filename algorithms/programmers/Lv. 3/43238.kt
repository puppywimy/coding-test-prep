class Solution {
    fun solution(n: Int, times: IntArray): Long {
        val maxTime = 1L * 1_000_000_000L * 1_000_000_000L
        val minTime = 1L
        
        var start = minTime
        var end = maxTime + 1
        var mid = -1L
        
        while (start < end) {
            mid = (start + end) / 2
            var total = 0L
            times
                .map { mid / it }
                .forEach {
                    total += it
                }
            if (total >= n) {
                end = mid
            } else {
                start = mid + 1
            }
        }
        
        return start
    }
}