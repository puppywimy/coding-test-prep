def solution(phone_number):
    characters = list(phone_number)
    for i in range(len(characters)):
        if len(characters) - i > 4:
            characters[i] = "*"
    return "".join(characters)
