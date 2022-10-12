const randomNum = (min, max) => {
  return Math.random() * (max - min) + min;
};

const isPrime = (number) => {
  if (number === 1) return false;
  for (let index = 2; index < number; index++) {
    if (number % index === 0) return false;
  }
  return true;
};

const even = (number) => {
  if (number % 2 === 0) return true;
  return false;
};

const odd = (number) => {
  return !even(number);
}

module.exports = { randomNum, isPrime, even, odd };
