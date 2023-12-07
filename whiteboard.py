from collections import Counter

def simple_encoder(phrase):
    # phrase = phrase.lower()
    char_count = Counter(phrase.lower())
    new_string = "".join([")" if char_count[char] > 1 else "(" for char in phrase])

    return new_string


print(simple_encoder('recede'))
