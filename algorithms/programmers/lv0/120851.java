class Solution {
    public int solution(String my_string) {
        int total = 0;
        for (int i = 0; i < my_string.length(); i++) {
            char currentCharacter = my_string.charAt(i);
            if (49 <= currentCharacter && currentCharacter <= 57) {
                total += currentCharacter - 48;
            }
        }
        return total;
    }
}