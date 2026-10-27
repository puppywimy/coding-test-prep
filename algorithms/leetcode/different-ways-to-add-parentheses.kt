class Solution {
    fun diffWaysToCompute(expression: String): List<Int> {
        val answer = mutableListOf<Int>()
        for (i in 0 until expression.length) {
            when (expression[i]) {
                '+' -> {
                    val lefts = diffWaysToCompute(expression.substring(0, i))
                    val rights = diffWaysToCompute(expression.substring(i + 1))
                    for (left in lefts) {
                        for (right in rights) {
                            answer.add(left + right)
                        }
                    }
                }
                '-' -> {
                    val lefts = diffWaysToCompute(expression.substring(0, i))
                    val rights = diffWaysToCompute(expression.substring(i + 1))
                    for (left in lefts) {
                        for (right in rights) {
                            answer.add(left - right)
                        }
                    }
                }
                '*' -> {
                    val lefts = diffWaysToCompute(expression.substring(0, i))
                    val rights = diffWaysToCompute(expression.substring(i + 1))
                    for (left in lefts) {
                        for (right in rights) {
                            answer.add(left * right)
                        }
                    }
                }
            }
        }
        if (answer.size == 0) return listOf(Integer.parseInt(expression))
        return answer;
    }
}