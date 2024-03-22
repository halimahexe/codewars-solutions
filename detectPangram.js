// Given a string, detect whether or not it is a pangram.
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// This is a massively overcomplicated solution that I'd like to refactor!

function isPangram(string){
  let regex = /[a-z]+/gi;
  let noSpaces = string.split(' ').join('').toLowerCase();
  let noPunctuation = noSpaces.match(regex).toString(' ');
  let alphabet = new Set(noPunctuation);
  alphabet.delete(',');
  if (alphabet.size == 26) {
    return true;
  } else return false;
}
