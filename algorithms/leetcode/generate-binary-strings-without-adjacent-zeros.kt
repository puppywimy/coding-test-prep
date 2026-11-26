class Solution {
    fun validStrings(n: Int): List<String> {
        val x = (1..n).map { -1 }.toIntArray()
        val s = mutableListOf<String>()
        recursive(x, 0, n, s)
        return s
    }

    fun recursive(x: IntArray, i: Int, n: Int, s: MutableList<String>) {
        if (i == n) {
            s.add(x.map { "" + it }.joinToString(""))
            return
        }

        if (i > 0 && x[i - 1] == 0) {
            x[i] = 1
            recursive(x, i + 1, n, s)
        }
        else {
            x[i] = 0
            recursive(x, i + 1, n, s)
            x[i] = 1
            recursive(x, i + 1, n, s)
        }
    }
}