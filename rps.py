# https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/python

def rps(p1, p2):
    beats = {"scissors": "paper", "paper": "rock", "rock": "scissors"}
    if beats[p1] == p2:
        return "Player 1 won!"
    elif beats[p2] == p1:
        return "Player 2 won!"
    elif p1 == p2:
        return "Draw!"
