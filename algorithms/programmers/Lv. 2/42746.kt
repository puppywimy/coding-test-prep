class Solution {
    fun solution(numbers: IntArray): String {
        val string = numbers
            .map { "" + it }
            .sortedWith({ a, b -> (b + a).compareTo(a + b) })
            .joinToString("")
        return if (string[0] == '0') "0" else string
    }
}