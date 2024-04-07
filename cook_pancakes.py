# https://www.codewars.com/kata/58552bdb68b034a1a80001fb/train/python

import math

def cook_pancakes(n, m):
    if n <= m / 2:
        return 2
    else:
        return math.ceil((n * 2) / m)
