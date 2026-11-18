class Solution {
    fun canReorderDoubled(arr: IntArray): Boolean {
        val pos = mutableListOf<Int>()
        val neg = mutableListOf<Int>()
        val zer = mutableListOf<Int>()
        arr
            .sorted()
            .forEach { it ->
                if (it > 0) pos.add(it)
                else if (it < 0) neg.add(it)
                else zer.add(it)
            }
        if (pos.size % 2 != 0 || neg.size % 2 != 0) return false
        val revneg = neg.sortedDescending()

        val vp = pos.map { false }.toMutableList()
        for (i in 0 until pos.size) {
            if (vp[i]) continue
            vp[i] = true
            var f = false
            for (j in i + 1 until pos.size) {
                if (vp[j]) continue
                if (pos[i] == 2 * pos[j] || 2 * pos[i] == pos[j]) {
                    vp[j] = true
                    f = true
                    break
                }
            }
            if (!f) return false
        }

        val vn = neg.map { false }.toMutableList()
        for (i in 0 until neg.size) {
            if (vn[i]) continue
            vn[i] = true
            var f = false
            for (j in i + 1 until neg.size) {
                if (vn[j]) continue
                if (neg[i] == 2 * neg[j] || 2 * neg[i] == neg[j]) {
                    vn[j] = true
                    f = true
                    break
                }
            }
            if (!f) return false
        }

        return true
    }
}