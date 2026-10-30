class Solution {
    fun averageWaitingTime(customers: Array<IntArray>): Double {

        var endTime = 0
        var sum = 0L

        for ((arrival, time) in customers) {
            endTime = maxOf(endTime, arrival) + time
            sum += endTime - arrival
        }

        return sum.toDouble() / customers.size
    }
}