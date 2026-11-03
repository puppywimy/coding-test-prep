class Solution {
    fun largestGoodInteger(num: String): String {
        val cSet = mutableSetOf<Char>()
        var last = 'x'
        var count = -1
        for (c in num) {
            if (last == c) {
                count++
                if (count >= 3) cSet.add(c)
            } else {
                count = 1
            }
            last = c
        }
        if (cSet.size == 0) return ""
        val str = cSet.sortedDescending()[0].toString()
        return str + str + str
    }
}