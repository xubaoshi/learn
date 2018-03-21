import datetime
import sys
import os
import time

# odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
# right_this_minute = datetime.today().minute
# if right_this_minute in odds:
#     print('This mimute seems a little odd')
# elif right_this_minute in odds:
#     print('Not an odd minute.')

# print(sys.platform)
# print(os.getcwd())
# # print(datetime.date.today())
# print(time.strftime("%H:%M"))

# loop
# # list
# for i in [1, 2, 3]:
#     print(i)

# # string
# for str in 'Hello World!':
#     print(str)

# # range
# for num in range(5):
#     print(num)

# odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29,
#         31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59]

# for i in range(5):
#   right_this_minute = datetime.today().minute
#   if right_this_minute in odds:
#     print("This minute seems a little odd.")
#   else:
#     print("Not an odd minute")

# pause
# time.sleep(5)
# print("sleep end")

# generate random number
# help(time)
# print(dir(time))

# list
# print(list(range(5)))
# print(list(range(5, 10)))
# print(list(range(0, 10, 2)))
# print(list(range(10, 0, -2)))
# print(list(range(10, 0, 2)))
# print(list(range(99, 0, -1)))

# beer songs
word = 'bottles'
for beer_num in range(99, 0, -1):
  print(beer_num,word,"of beer on the wall.")
  print(beer_num,word,"of beer.")
  print("Take on down.")
  print("Pass it around.")
  if beer_num == 1:
    print("No more bottles of beer on the wall")
  else:
    new_num = beer_num - 1
    if new_num == 1:
      word = "bottles"
    print(new_num,word,"of beer on the wall.")
  print()