# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    while True:
        string = ""
        try:
            string = input()
        except:
            break
        characters = list(string)
        sameCharacters = []
        differentCharacters = []
        # 빈 줄 처리
        if not len(characters):
            print("")
            continue
        previousCharacter = characters[0]
        encodedString = ""
        for character in characters[1:]:
            if previousCharacter == character:
                if len(differentCharacters):
                    encodedString += f"1{''.join(differentCharacters)}1"
                    differentCharacters = []
                sameCharacters.append(previousCharacter)
                # 9개에서 끊기
                if len(sameCharacters) == 9:
                    encodedString += f"9{previousCharacter}"
                    sameCharacters = []
            else:
                if len(sameCharacters):
                    encodedString += f"{len(sameCharacters) + 1}{previousCharacter}"
                    sameCharacters = []
                else:
                    differentCharacters.append(
                        previousCharacter if previousCharacter != "1" else "11"
                    )
            previousCharacter = character
        if len(sameCharacters):
            encodedString += f"{len(sameCharacters) + 1}{previousCharacter}"
        elif len(differentCharacters):
            encodedString += f"1{''.join(differentCharacters)}{previousCharacter if previousCharacter != '1' else '11'}1"
        else:
            encodedString += (
                f"1{previousCharacter if previousCharacter != '1' else '11'}1"
            )
        print(encodedString)


solution()
