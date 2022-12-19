/**
 * check if letter is vowel
 *
 * @since 1.0.0
 * @category String
 * @param {string} letter string letter
 * @returns {boolean} return true if letter is vowel
 * @example
 *
 * isVowel('A')
 * // => true
 */
const isVowel = (letter) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'é', 'à', 'è', 'ù', 'â', 'ê', 'î', 'ô', 'û'];
  return vowels.includes(letter.toLowerCase());
};

/**
 * check if letters have vowel or consumn
 *
 * @since 1.0.0
 * @category String
 * @param {array} letters array of letters
 * @returns {array} return array of boolean
 * @example
 *
 * isVowels(['a', 'c', 'e'])
 * // => [true, false, true]
 */
const isVowels = (letters) => letters.map((letter) => isVowel(letter));

/**
 * check if letter is consumn
 *
 * @since 1.0.0
 * @category String
 * @param {string} letter string letter
 * @returns {boolean} return true if letter is consumn
 * @example
 *
 * isConsumn('b')
 * // => true
 */
const isConsumn = (letter) => !isVowel(letter);

/**
 * check if letters have consumn or vowel
 *
 * @since 1.0.0
 * @category String
 * @param {array} letters array of letters
 * @returns {array} return array of boolean
 * @example
 *
 * isConcumns(['a', 'b', 'c'])
 * // => [false, true, true]
 */
const isConsumns = (letters) => letters.map((letter) => isConsumn(letter));

/**
 * get initial in full name
 *
 * @since 1.0.0
 * @category String
 * @param {string} fullname fullname 'jhon snow'
 * @param {string} separator separtor is string for separate initial default ' '
 * @returns {string} return initial J S
 * @example
 *
 * getInitialName('jhon snow', '-')
 * // => 'J-S'
 */
const getInitialName = (fullname, separator = ' ') => {
  const nameSplitted = fullname.split(' ');
  const firstnameLetter = nameSplitted[0][0].toUpperCase();
  const lastNameLetter = nameSplitted[1][0].toUpperCase();
  return `${firstnameLetter}${separator}${lastNameLetter}`;
};

/**
 * check if entry is string
 *
 * @since 1.1.0
 * @category String
 * @param {any} string value for check is string
 * @returns {boolean} return true if value is a string
 * @example
 *
 * isString('test')
 * // => true
 */
const isString = (string) => typeof string === 'string';

/**
 * convert value in camelCase to kebab-case or snake_case
 *
 * @since 1.1.0
 * @category String
 * @param {string} value value for convert
 * @param {string} separator separator beetween words
 * @returns {string} return value in kebab-case or snake_case
 * @example
 *
 * camelCaseToOtherCase('testTest', '_')
 * // => test_test
 */
const camelCaseToOtherCase = (value, separator) => value.replace(/([A-Z])/g, ' $1').split(' ').join(separator).toLowerCase();

/**
 * convert string in camelCase to kebab-case
 *
 * @since 1.1.0
 * @category String
 * @param {string} value value for convert
 * @returns {string} return value in kebab-case
 * @example
 *
 * toKebabCase('testTest')
 * // => test-test
 */
const toKebabCase = (value) => camelCaseToOtherCase(value, '-');

/**
 * convert string in camelCase to kebab-case
 *
 * @since 1.1.0
 * @category String
 * @param {string} value value for convert
 * @returns {string} return value in kebab-case
 * @example
 *
 * toSnakeCase('testTest')
 * // => test_test
 */
const toSnakeCase = (value) => camelCaseToOtherCase(value, '_');

/**
 * convert string in camelCase to PascalCase
 *
 * @since 1.1.0
 * @category String
 * @param {string} value value for convert
 * @returns {string} return value in PascalCase
 * @example
 *
 * toPascalCase('testTest')
 * // => TestTest
 */
const toPascalCase = (value) => `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

/**
 * generate a uuid
 *
 * @since 1.2.0
 * @category String
 * @returns {string} return a uuid
 * @example
 *
 * uuid()
 * // => '557abf46-ecf7-4464-a37b-c8cc54bcffb2'
 */
const uuid = () => {
  let dt = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    // eslint-disable-next-line no-bitwise, no-mixed-operators
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

module.exports = {
  isVowel,
  isVowels,
  isConsumn,
  isConsumns,
  getInitialName,
  isString,
  camelCaseToOtherCase,
  toKebabCase,
  toSnakeCase,
  toPascalCase,
  uuid,
};
