# https://www.codewars.com/kata/57d532d2164a67cded0001c7/train/python

def histogram(results):
    dice_rolls = {
        6: results[5],
        5: results[4],
        4: results[3],
        3: results[2],
        2: results[1],
        1: results[0]
    }
    graph = ""
    for n in dice_rolls:
        frequency = dice_rolls[n]
        if frequency > 0:
            graph += f"{n}|{'#' * frequency} {frequency}\n"
        else:
            graph += f"{n}|\n"
    return graph
