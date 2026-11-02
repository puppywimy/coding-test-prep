class Solution {
    public String solution(String my_string) {
        String answer = "";
        for (int i = 0; i < my_string.length(); i++) {
            char currentCharacter = my_string.charAt(i);
            if (97 <= currentCharacter && currentCharacter <= 122) {
                answer += (char) (currentCharacter - 32);
            } else if (65 <= currentCharacter && currentCharacter <= 90) {
                answer += (char) (currentCharacter + 32);
            } 
        }
        return answer;
    }
}