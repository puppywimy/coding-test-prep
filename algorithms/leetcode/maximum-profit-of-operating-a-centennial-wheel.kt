class Solution {
    fun minOperationsMaxProfit(customers: IntArray, boardingCost: Int, runningCost: Int): Int {
        var maxProfit = 0
        var maxProfitRotation = 0

        var index = 0
        var waiting = 0

        var totalProfit = 0
        var rotation = 0

        while (index < customers.size || waiting > 0) {
            if (index < customers.size) {
                waiting += customers[index++]
            }
            if (waiting > 4) {
                totalProfit += 4 * boardingCost
                waiting -= 4
            } else {
                totalProfit += waiting * boardingCost
                waiting = 0
            }
            totalProfit -= runningCost
            rotation++

            if (totalProfit > maxProfit) {
                maxProfit = totalProfit
                maxProfitRotation = rotation
            }
        }

        return if (maxProfitRotation == 0) -1 else maxProfitRotation
    }
}