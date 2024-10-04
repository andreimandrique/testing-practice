function encryptLetter(letter, key) {
  if (key > 26) throw "key cannot be greater than 26";

  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = alphabetString.split("");
  const indexOfLetters = alphabet.indexOf(letter);
  const addKey = indexOfLetters + key;
  const value = addKey - 26;
  let encrypt;

  if (value < 0) {
    encrypt = addKey;
  } else {
    encrypt = value;
  }

  const result = alphabet[encrypt];
  return result;
}

function checkCase(char) {
  return /[A-Z]/.test(char) ? true : false;
}

function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char) ? true : false;
}

function caesarCipher(word, key) {
  const wordSplit = word.split("");

  let result = [];

  for (const element of wordSplit) {
    if (isCharacterALetter(element)) {
      if (checkCase(element)) {
        const lowerCase = element.toLowerCase();
        const letter = encryptLetter(lowerCase, key);
        const upperCase = letter.toUpperCase();
        result.push(upperCase);
      } else {
        const lowerCase = encryptLetter(element, key);
        result.push(lowerCase);
      }
    } else {
      result.push(element);
    }
  }

  const string = result.join("");

  return string;
}

export default caesarCipher;
