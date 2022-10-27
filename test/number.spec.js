const { randomNum, isPrime, even, odd, isNumber } = require('../src/number');

describe('Test unit number method', () => { 
  it('should method randomNum return reandom number beetween 5 and 10', () => {
    const numberRandom = randomNum(5, 10);
    const isInRange = numberRandom >= 5 && numberRandom <= 10;
    const isOutRange = numberRandom < 5 || numberRandom > 10;

    expect(isInRange).toEqual(true);
    expect(isOutRange).toEqual(false);
  });

  it('should method isPrime reutrn true if number is prime', () => {
    const oneIsNotPrime = isPrime(1);
    const twoIsPrime = isPrime(2);
    const eightIsNotPrime = isPrime(8);
    const longNumberIsPrime = isPrime(22091);

    expect(oneIsNotPrime).toEqual(false);
    expect(twoIsPrime).toEqual(true);
    expect(eightIsNotPrime).toEqual(false);
    expect(longNumberIsPrime).toEqual(true);
  });

  it('should method even return true if number is even', () => {
    const numberIsEven = even(10);
    const numberIsNotEven = even(11);

    expect(numberIsEven).toEqual(true);
    expect(numberIsNotEven).toEqual(false);
  });

  it('should method odd return true if number is odd', () => {
    const numberIsOdd = odd(11);
    const numberIsNotOdd = odd(10);

    expect(numberIsOdd).toEqual(true);
    expect(numberIsNotOdd).toEqual(false);
  });

  it('should method is number return true if entry is number', () => {
    expect(isNumber(2)).toBeTruthy();
    expect(isNumber(2.2)).toBeTruthy();
  });

  it('should method is number return false if entry is not a number', () => {
    expect(isNumber('string')).toBeFalsy();
    expect(isNumber({ object: 'sample' })).toBeFalsy();
    expect(isNumber(['array', 'sample'])).toBeFalsy();
  });
})
