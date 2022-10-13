const { merge, clone, diff } = require('../src/array');

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
});
