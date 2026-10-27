class Solution {
    fun chalkReplacer(chalk: IntArray, k: Int): Int {
        var chalks = k
        while (true) {
            for (i in 0 until chalk.size) {
                if (chalks < chalk[i]) return i
                chalks -= chalk[i]
            }
        }
        return -1
    }
}