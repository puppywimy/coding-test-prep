def solution(s, n):
    characters = list(s)
    for i in range(len(characters)):
        code = ord(characters[i])
        if 65 <= code and code <= 90:
            code = (code - 65 + n) % 26 + 65
        elif 97 <= code and code <= 122:
            code = (code - 97 + n) % 26 + 97
        characters[i] = chr(code)
    return "".join(characters)
