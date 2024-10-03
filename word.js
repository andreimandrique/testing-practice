const alphabetString = "abcdefghijklmnopqrstuvwxyz";
const alphabet = alphabetString.split("");

let key = 3;
let word = "zyxwabcd";
const wordArray = word.split("");
const stepOneArray = [];
const stepTwoArray = [];
const stepThreeArray = [];

for (const item of wordArray) {
  const indexOfLetters = alphabetString.indexOf(item);
  stepOneArray.push(indexOfLetters);
}

for (const item of stepOneArray) {
  const addKey = item + key;
  stepTwoArray.push(addKey);
}

for (const item of stepTwoArray) {
  const minusKey = item - 25;

  if (minusKey < 0) {
    stepThreeArray.push(item);
  } else {
    stepThreeArray.push(minusKey);
  }
}

console.log(alphabet);
console.log(stepOneArray);
console.log(stepTwoArray);
console.log(stepThreeArray);
