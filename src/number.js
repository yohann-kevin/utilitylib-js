/**
 * generate random num beetween two number
 *
 * @since 1.0.0
 * @category Number
 * @param {number} min min value
 * @param {number} max max value
 * @returns {number} return number generated beetween two values
 * @exmaple
 *
 * randomNum(1, 8)
 * // => 6
 */
const randomNum = (min, max) => Math.random() * (max - min) + min;

/**
 * check if number is prime
 *
 * @since 1.0.0
 * @category Number
 * @param {number} number number for check
 * @returns {boolean} return true if this number is a prime number
 * @example
 *
 * isPrime(7)
 * // => true
 */
const isPrime = (number) => {
  if (number === 1) return false;
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) return false;
  }
  return true;
};

/**
 * check if number is even
 *
 * @since 1.0.0
 * @category Number
 * @param {number} number number for check
 * @returns {boolean} return true if number is even
 * @example
 *
 * even(4)
 * // => true
 */
const even = (number) => {
  if (number % 2 === 0) return true;
  return false;
};

/**
 * check if number is odd
 *
 * @since 1.0.0
 * @category Number
 * @param {number} number number for check
 * @returns {boolean} return true if number is odd
 * @example
 *
 * odd(5)
 * // => true
 */
const odd = (number) => !even(number);

/**
 * check if entry is number
 *
 * @since 1.1.0
 * @categry Number
 * @param {any} number value for check is number
 * @returns {boolean} return true if value is a number
 * @example
 *
 * isNumber(5)
 * // => true
 */
const isNumber = (number) => typeof number === 'number';

module.exports = {
  randomNum, isPrime, even, odd, isNumber,
};
