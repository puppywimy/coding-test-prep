class Solution {
    public double solution(int[] numbers) {
        float total = 0;
        for (int i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total / numbers.length;
    }
}