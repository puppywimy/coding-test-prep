class Solution {
    fun solution(clothes: Array<Array<String>>): Int {
        val cm = mutableMapOf<String, Int>()
        for ((name, type) in clothes) {
            if (type in cm) {
                cm.put(type, (cm.get(type) ?: 0) + 1)
            } else {
                cm.put(type, 1)
            }
        }
        var caseCount = 1
        for ((key, value) in cm) {
            caseCount *= value + 1
        }
        return caseCount - 1
    }
}