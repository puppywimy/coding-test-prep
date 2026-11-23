class Solution {
    fun getKth(lo: Int, hi: Int, k: Int): Int {
        val pows = mutableMapOf<Int, Int>()
        for (i in lo..hi) {
            var n = i
            var power = 0
            while (n > 1) {
                if (n % 2 == 0) n = n / 2
                else n = n * 3 + 1
                power++
            }
            pows.put(i, power)
        }
        val sortedPows = pows.entries.sortedWith { a, b -> a.value - b.value }
        return sortedPows[k - 1].key
    }
}