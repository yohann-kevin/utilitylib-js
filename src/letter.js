/**
 * check if letter is vowel
 * @param {string} letter string letter
 * @returns {boolean} return true if letter is vowel
 */
const isVowel = (letter) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  return vowels.includes(letter.toLowerCase());
};

/**
 * check if letters have vowel or consumn
 * @param {array} letters array of letters
 * @returns {array} return array of boolean
 */
const isVowels = (letters) => {
  return letters.map((letter) => {
    return isVowel(letter);
  });
};

/**
 * check if letter is consumn
 * @param {string} letter string letter
 * @returns {boolean} return true if letter is consumn
 */
const isConsumn = (letter) => {
  return !isVowel(letter);
};

/**
 * check if letters have consumn or vowel
 * @param {array} letters array of letters
 * @returns {array} return array of boolean
 */
const isConsumns = (letters) => {
  return letters.map((letter) => {
    return isConsumn(letter);
  });
};

const getInitialName = (fullname) => {
  const nameSplitted = fullname.split(' ');
  const firstnameLetter = nameSplitted[0][0].toUpperCase();
  const lastNameLetter = nameSplitted[1][0].toUpperCase();
  return `${firstnameLetter}.${lastNameLetter}`;
};

module.exports = {
  isVowel,
  isVowels,
  isConsumn,
  isConsumns,
  getInitialName
};
