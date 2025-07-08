def solution(s):
    output = []
    for word in s.split(" "):
        characters = list(word)
        for i in range(len(characters)):
            if i % 2 == 0:
                characters[i] = characters[i].upper()
            else:
                characters[i] = characters[i].lower()
        output.append("".join(characters))
    return " ".join(output)
