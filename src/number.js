/**
 * generate random num beetween two number
 * @param {number} min min value
 * @param {number} max max value
 * @returns {number} return number generated beetween two values
 */
const randomNum = (min, max) => Math.random() * (max - min) + min;

/**
 * check if number is prime
 * @param {number} number number for check
 * @returns {boolean} return true if this number is a prime number
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
 * @param {number} number number for check
 * @returns {boolean} return true if number is even
 */
const even = (number) => {
  if (number % 2 === 0) return true;
  return false;
};

/**
 * check if number is odd
 * @param {number} number number for check
 * @returns {boolean} return true if number is odd
 */
const odd = (number) => !even(number);

module.exports = {
  randomNum, isPrime, even, odd,
};
