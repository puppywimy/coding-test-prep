class Solution {
    public String solution(String my_string) {
        String answer = "";
        for (int i = 0; i < my_string.length(); i++) {
            char currentCharacter = my_string.charAt(i);
            if (
                currentCharacter == 'a' ||
                currentCharacter == 'e' ||
                currentCharacter == 'i' ||
                currentCharacter == 'o' ||
                currentCharacter == 'u'
            ) continue;
            answer += currentCharacter;
        }
        return answer;
    }
}