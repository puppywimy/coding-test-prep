class Solution {
    public int solution(int n, int k) {
        int freeDrinkCount = n / 10;
        return n * 12000 + (k - freeDrinkCount) * 2000;
    }
}