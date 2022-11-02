/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/**
 * merge two array
 * @param {Array} array first array
 * @param {Array} arrayToMerge array for merge
 * @returns {Array} return array merged
 */
const merge = (array, arrayToMerge) => {
  const arrayMerged = array;
  arrayToMerge.forEach((elmnt) => arrayMerged.push(elmnt));
  return arrayMerged;
};

/**
 * clone an array
 * @param {Array} array array for clone
 * @returns {Array} return new instance of array
 */
const clone = (array) => array.map((elmnt) => elmnt);

/**
 * Compare two array and return diff
* @param {Array} arrayOne first array
 * @param {Array} arrayTwo array for comparaison
 * @returns {Array} return array of diff between two array
 */
const diff = (arrayOne, arrayTwo) => arrayOne
  .filter((elmnt) => !arrayTwo.includes(elmnt))
  .concat(arrayTwo.filter((elmnt) => !arrayOne.includes(elmnt)));

/**
 * check if entry is array
 * @param {any} array value for check is array
 * @returns {boolean} return true if value is a array
 */
const isArray = (array) => typeof array === 'object' && array.length;

/**
 * remove values in array
 * @param {Array} array array contain values for check
 * @param {Array} values array of values to remove
 * @returns {Array} return array without value to remove
 */
const removeAll = (array, values) => array.filter((arrayValue) => {
  if (values.indexOf(arrayValue) === -1) return arrayValue;
});

/**
 * remove values in array
 * @param {Array} array array contain values for check
 * @param  {...any} values any values to remove
 * @returns {Array} return array without value to remove
 */
const remove = (array, ...values) => removeAll(array, values);

module.exports = {
  merge,
  clone,
  diff,
  isArray,
  removeAll,
  remove,
};
