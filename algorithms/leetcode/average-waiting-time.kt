class Solution {
    fun averageWaitingTime(customers: Array<IntArray>): Double {
        val times = mutableListOf<Long>()

        var currtime = 0L
        for ((a, t) in customers) {
            currtime = maxOf(currtime, a.toLong()) + t
            times.add(currtime - a)
        }

        var total = 0L
        for (t in times) {
            total += t
        }

        return total.toDouble() / times.size
    }
}