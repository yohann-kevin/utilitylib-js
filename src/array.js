/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

/**
 * A Array utility functions.
 * @module Array
 */

/**
 * merge two array
 *
 * @alias module:Array
 * @since 1.0.0
 * @category Array
 * @param {Array} array first array
 * @param {Array} arrayToMerge array for merge
 * @returns {Array} return array merged
 * @example
 *
 * merge([1, 2], [3, 4])
 * // => [1, 2, 3, 4]
 */
const merge = (array, arrayToMerge) => {
  const arrayMerged = array;
  arrayToMerge.forEach((elmnt) => arrayMerged.push(elmnt));
  return arrayMerged;
};

/**
 * clone an array
 *
 * @alias module:Array
 * @since 1.0.0
 * @category Array
 * @param {Array} array array for clone
 * @returns {Array} return new instance of array
 * @example
 *
 * clone([1, 2])
 * // => [1, 2]
 */
const clone = (array) => array.map((elmnt) => elmnt);

/**
 * Compare two array and return diff
 *
 * @alias module:Array
 * @since 1.0.0
 * @category Array
 * @param {Array} arrayOne first array
 * @param {Array} arrayTwo array for comparaison
 * @returns {Array} return array of diff between two array
 * @example
 *
 * diff([1, 2], [1, 3])
 * // => [2, 3]
 */
const diff = (arrayOne, arrayTwo) => arrayOne
  .filter((elmnt) => !arrayTwo.includes(elmnt))
  .concat(arrayTwo.filter((elmnt) => !arrayOne.includes(elmnt)));

/**
 * check if entry is array
 *
 * @alias module:Array
 * @since 1.1.0
 * @category Array
 * @param {any} array value for check is array
 * @returns {boolean} return true if value is a array
 * @example
 *
 * isArray([1, 2])
 * // => true
 */
const isArray = (array) => typeof array === 'object' && array.length;

/**
 * remove values in array
 *
 * @alias module:Array
 * @since 1.1.0
 * @category Array
 * @param {Array} array array contain values for check
 * @param {Array} values array of values to remove
 * @returns {Array} return array without value to remove
 * @example
 *
 * removeAll([1, 2, 2, 3, 4], [2, 4])
 * // => [1, 3]
 */
const removeAll = (array, values) => array.filter((arrayValue) => {
  if (values.indexOf(arrayValue) === -1) return arrayValue;
});

/**
 * remove values in array
 *
 * @alias module:Array
 * @since 1.1.0
 * @category Array
 * @param {Array} array array contain values for check
 * @param  {...any} values any values to remove
 * @returns {Array} return array without value to remove
 * @example
 *
 * remove([1, 2, 3, 4], 1, 2)
 * // => [3, 4]
 */
const remove = (array, ...values) => removeAll(array, values);

/**
 * return array of uniq value work with array of object
 *
 * @alias module:Array
 * @since 1.2.0
 * @category Array
 * @param {Array<any>} array of values any type
 * @returns {Array<any>} return array of uniq values
 * @example
 *
 * uniq([1, 2, 4, 5, 5, 123, 123, 132])
 *
 * // => [1, 2, 4, 5, 123, 132]
 */
const uniq = (array) => {
  const uniqArray = [];
  array.forEach((value) => {
    const isObject = typeof value === 'object';

    if (!isObject && !uniqArray.includes(value)) {
      uniqArray.push(value);
    }

    if (isObject) {
      // eslint-disable-next-line arrow-body-style
      const valueAlreadyExist = uniqArray.filter((uniqValue) => {
        return JSON.stringify(value) === JSON.stringify(uniqValue);
      }).length > 0;

      if (!valueAlreadyExist) {
        uniqArray.push(value);
      }
    }
  });
  return uniqArray;
};

module.exports = {
  merge,
  clone,
  diff,
  isArray,
  removeAll,
  remove,
  uniq,
};
