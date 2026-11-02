class Solution {
    public int solution(int n) {
        String stringN = "" + n;
        int total = 0;
        for (int i = 0; i < stringN.length(); i++) {
            total += stringN.charAt(i) - 48;
        }
        return total;
    }
}