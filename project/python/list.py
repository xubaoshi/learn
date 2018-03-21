import random
import pprint

# random
# print(random.randint(1, 60))

# list

# litear define
# prices = []
# temps = [32.0, 212.0, 0.0, 81.6, 100.0, 45.3]
# words = ['hello', 'world']
# car_details = ['Toyota', 'RAV4', 2.2, 60807]
# everything = [prices, temps, words, car_details]
# odds_and_ends = [[1, 2, 3], ['a', 'b', 'c'], ['One', 'Two', 'Three']]

# check in list
# vowels = ['a', 'e', 'i', 'o', 'u']
# word = "Milliways"
# for letter in word:
#     if letter in vowels:
#         print(letter)

# growing list
# found = []
# print(len(found))
# found.append('a')
# print(len(found))
# found.append('e')
# found.append('i')
# found.append('o')
# print(len(found))
# print(found)
# if 'u' not in found:
#   found.append('u')
# print(found)
# vowels = ['a', 'e', 'i', 'o', 'u']
# word = "Milliways"
# found = []
# for letter in word:
#     if letter in vowels:
#         if letter not in found:
#             found.append(letter)
# for vowel in found:
#     print(vowel)

# # remove
# nums = [1,2,3,4]
# nums.remove(3)
# #nums.remove(0) # 如果当前不存在该元素报错
# print(nums)

# #pop
# nums.pop(0) # 移除最后的List元素
# print(nums)
# nums.pop(0)
# print(nums)

# #extend
# nums.extend([3,4])
# print(nums)

# #insert
# nums.insert(0,1)
# print(nums)
# nums.insert(2,'two-and-a-half')
# print(nums)

# #join
# phrase = 'Don\'t panic!'
# plist = list(phrase)
# print(phrase)
# print(plist)
# new_phrase = ''.join(plist)
# print(plist)
# print(new_phrase)
# for i in range(4):
#   plist.pop()
# print(plist)
# plist.pop(0)
# print(plist)
# plist.remove('\'')
# print(plist)
# plist.extend([plist.pop(),plist.pop()])
# print(plist)
# plist.insert(2,plist.pop(3))
# print(plist)
# new_phrase = ''.join(plist)
# print(new_phrase)

# # copy
# first = [1,2,3,4,5]
# second = first
# second.append(6)
# print(first)
# print(second)
# third = second.copy()
# third.append(7)
# print(second)
# print(third)

# # slice
# letters = list("Don't panic!")
# print(letters)
# print(letters[0:10:3])
# print(letters[3:])
# print(letters[:10])
# print(letters[::2])
# #backwards
# book = "The Hitchhiker's Guide to the Galaxy"
# bookList = list(book)
# print(''.join(bookList[-6:]))
# backwards = bookList[::-1]
# print(''.join(backwards))

people = {}
people['Ford'] = {'Name': 'Ford Prefect', 'Gender': 'Male',
                  'Occpation': 'Researcher', 'Home Planet': 'Betelgeuse Seven'}
print(people)
pprint.pprint(people)
