# Structured Data

# Dictonary
# person3 = {
#     'Name': 'Ford Prefect',
#     'Gender': 'Male',
#     'Occupation': 'Researcher',
#     'Home Planet': 'Betelgeuse Seven'
# }
# print(person3)
# person3['Age'] = '33'
# print(person3)

# for key in person3:
#     print(key)
#     print(person3[key])

# if 'banana' in person3:
#     person3['banana'] += 1
# else:
#     person3['banana'] = 1
# print(person3['banana'])

# person3.setdefault('pears', 0)
# person3['pears'] += 1
# print(person3)

# for k, v in sorted(person3.items()):
#   print(k)
#   print(v)


# set
# vowels = {'a', 'e', 'e', 'i', 'o', 'u', 'u'}
# print(vowels)
# # create set
# vowels2 = set('aeeiouu')
# print(vowels2)
# vowels = set('aeiou')
# word = 'hello'
# print(vowels)
# u = vowels.union(set(word))
# print(u)
# u_list = sorted(list(u))
# print(u_list)
# # difference
# d = vowels.difference(set(word))
# print(d)
# # intersection
# v = vowels.intersection(set(word))
# print(v)
# # input pick same word
# word = input("Provide a word")
# found = []
# for letter in word:
#   if letter in vowels:
#     if letter not in found:
#       found.append(letter)
# for vowel in found:
#   print(vowel)


# tuple
# tuple are immutable
vowels = ['a', 'e', 'i', 'o', 'u']
print(type(vowels))
vowels2 = ('a', 'e', 'i', 'o', 'u')
vowels3 = {'a', 'e', 'i', 'o', 'u'}
print(type(vowels2))
print(vowels[2])
# single-object tuples
t = ('Python')
print(type(t))
t = ('Python','Javascript')
print(type(t))


