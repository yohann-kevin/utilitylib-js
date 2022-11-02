const { merge, clone, diff, isArray, removeAll, remove } = require('../src/array');

describe('Test unit method array', () => {
  it('should method merge return array merged', () => {
    const initialArray = [1, 2, 3, 4];
    const arrayToMerge = [5, 6, 7, 8];
    const arrayExpected = [1, 2, 3, 4, 5, 6, 7, 8];

    const arrayMerged = merge(initialArray, arrayToMerge);

    expect(arrayMerged).toEqual(arrayExpected);
  });

  it('should method clone return array cloned', () => {
    const array = [1, 2, 3];

    const arrayCloned = clone(array);
    const arrayEquality = arrayCloned === array;

    expect(arrayEquality).toEqual(false);
  });

  it('should method diff return diference between two array', () => {
    const arrayOne = [1, 2, 3, 12];
    const arrayTwo = [1, 2, 3, 4, 5, 6];
    const diffExpected = [4, 5, 6, 12];

    const difference = diff(arrayOne, arrayTwo);

    expect(difference).toEqual(expect.arrayContaining(diffExpected));
  });

  it('should method is array return true if entry is array', () => {
    expect(isArray(['string', 'sample'])).toBeTruthy();
    expect(isArray([2, 2])).toBeTruthy();
  });

  it('should method is array return false if entry is not a array', () => {
    expect(isArray('string')).toBeFalsy();
    expect(isArray(2)).toBeFalsy();
    expect(isArray({ object: 'sample' })).toBeFalsy();
  });

  it('should method removeAll return an array without value to remove', () => {
    const arraySample = ['a', 'b', 'c', 'a', 'b', 'c'];
    const valueToRemove = ['b', 'c'];
    
    const arrayExpected = ['a', 'a'];
    const result = removeAll(arraySample, valueToRemove);
    
    expect(result).toEqual(arrayExpected);
  });

  it('should method remove return array without value to remove in args', () => {
    const arrayOneSample = [1, 2, 3, 4, 5, 1];
    const arrayTwoSample = ['a', 'b', 'c', 'p', 'plop', 'd'];
    const arrayOneExpected = [2, 4, 5];
    const arrayTwoExpected = ['b', 'c', 'plop'];

    const resultOne = remove(arrayOneSample, 1, 3);
    const resultTwo = remove(arrayTwoSample, 'a', 'd', 'p');

    expect(resultOne).toEqual(arrayOneExpected);
    expect(resultTwo).toEqual(arrayTwoExpected);
  });
});
