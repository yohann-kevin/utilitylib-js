/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/**
 * compare object equality
 * @param {object} objectOne first object to compare
 * @param {object} objectTwo other object for comparaison
 * @returns {boolean} return true if two object is equal
 */
const isEqual = (objectOne, objectTwo) => JSON.stringify(objectOne) === JSON.stringify(objectTwo);

/**
 * clone object
 * @param {object} objectToClone object to clone
 * @returns {object} new instance of this object
 */
const clone = (objectToClone) => {
  const objectCloned = {};
  for (const key in objectToClone) objectCloned[key] = objectToClone[key];
  return objectCloned;
};

/**
 * clone all object in array
 * @param {Array<object>} objectsToClone array of object
 * @returns {Array<object>} return array of object cloned
 */
const clones = (objectsToClone) => objectsToClone.map((object) => clone(object));

/**
 * check if object is empty
 * @param {object} object object for check
 * @returns {boolean} return true if object is empty
 */
const isEmpty = (object) => Object.keys(object).length === 0;

/**
 * merge two object
 * @param {object} object one object
 * @param {object} objectToMerge object for merge
 * @returns {object} return merged object
 */
const merge = (object, objectToMerge) => {
  const newObject = object;
  for (const key in objectToMerge) newObject[key] = objectToMerge[key];
  return object;
};

/**
 * check if entry is object
 * @param {any} object value for check is object
 * @returns {boolean} return true if value is a object
 */
const isObject = (object) => typeof object === 'object' && !object.length;

module.exports = {
  isEqual, clone, clones, isEmpty, merge, isObject,
};
