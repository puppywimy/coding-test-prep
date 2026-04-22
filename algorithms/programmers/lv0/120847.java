class Solution {
    public int solution(int[] numbers) {
        int max = 0;
        for (int i = 0; i < numbers.length; i++) {
            for (int j = 0; j < numbers.length; j++) {
                if (i == j) continue;
                int product = numbers[i] * numbers[j];
                if (max < product) max = product;
            }
        }
        return max;
    }
}