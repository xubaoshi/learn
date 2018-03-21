# Function And Modules
def search4vowels():
    """Display any vowels found in an asked"""
    vowels = set('aeiou')
    word = input('Provide a word')
    print(word)
    found = vowels.intersection(set(word))
    for vowel in found:
        print(vowel)
# search4vowels()

# annotaions


def search4vowels2(word: str) -> set:
    """ Return any vowels found in a supplied word. """
    vowels = set('aeiou')
    return vowels.intersection(set(word))


# search4vowels2('galaxy')

# two paramters


def search4letters(phrase: str, letters: str='aeiou') -> set:
    """Return a set of the 'letters' found in 'phrase'"""
    return set(letters).intersection(set(phrase))
print(search4letters('galaxy', 'xyz'))
print(search4letters(letters='xyz',phrase='galaxy'))