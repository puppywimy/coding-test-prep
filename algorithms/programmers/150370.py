def solution(today, terms, privacies):
    today = list(map(int, today.split(".")))
    termsDictionary = dict()
    expiredPrivacies = []

    def expirePrivacy(number):
        expiredPrivacies.append(number)

    for term in terms:
        type, months = term.split(" ")
        termsDictionary[type] = int(months)

    for i in range(len(privacies)):
        privacy = privacies[i]
        date, type = privacy.split(" ")
        day = list(map(int, date.split(".")))
        totalMonth = day[1] + termsDictionary[type]
        day[0] += (totalMonth - 1) // 12
        day[1] = (totalMonth - 1) % 12 + 1
        if today[0] > day[0]:
            expirePrivacy(i + 1)
        elif today[0] < day[0]:
            continue
        else:
            if today[1] > day[1]:
                expirePrivacy(i + 1)
            elif today[1] < day[1]:
                continue
            else:
                if today[2] >= day[2]:
                    expirePrivacy(i + 1)

    return expiredPrivacies
