/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/**
 * A Object utility functions.
 * @module Object
 */

/**
 * compare object equality
 *
 * @alias module:Object
 * @since 1.0.0
 * @category Object
 * @param {object} objectOne first object to compare
 * @param {object} objectTwo other object for comparaison
 * @returns {boolean} return true if two object is equal
 * @example
 *
 * isEqual({ name: 'test' }, { name: 'test' })
 * // => true
 */
const isEqual = (objectOne, objectTwo) => JSON.stringify(objectOne) === JSON.stringify(objectTwo);

/**
 * clone object
 *
 * @alias module:Object
 * @since 1.0.0
 * @category Object
 * @param {object} objectToClone object to clone
 * @returns {object} new instance of this object
 * @example
 *
 * clone({ name: 'test' })
 * // => { name: 'test' }
 */
const clone = (objectToClone) => {
  const objectCloned = {};
  for (const key in objectToClone) objectCloned[key] = objectToClone[key];
  return objectCloned;
};

/**
 * clone all object in array
 *
 * @alias module:Object
 * @since 1.0.0
 * @category Object
 * @param {Array<object>} objectsToClone array of object
 * @returns {Array<object>} return array of object cloned
 * @example
 *
 * clones([{ name: 'test' }])
 * // => [{ name: 'test' }]
 */
const clones = (objectsToClone) => objectsToClone.map((object) => clone(object));

/**
 * check if object is empty
 *
 * @alias module:Object
 * @since 1.0.0
 * @category Object
 * @param {object} object object for check
 * @returns {boolean} return true if object is empty
 * @example
 *
 * isEmpty({})
 * // => true
 */
const isEmpty = (object) => Object.keys(object).length === 0;

/**
 * merge two object
 *
 * @alias module:Object
 * @since 1.0.0
 * @category Object
 * @param {object} object one object
 * @param {object} objectToMerge object for merge
 * @returns {object} return merged object
 * @example
 *
 * merge({ name: 'snow' }, { firstname: 'jhon' })
 * // => { name: 'snow', firstname: 'jhon' }
 */
const merge = (object, objectToMerge) => {
  const newObject = object;
  for (const key in objectToMerge) newObject[key] = objectToMerge[key];
  return object;
};

/**
 * check if entry is object
 *
 * @alias module:Object
 * @since 1.1.0
 * @category Object
 * @param {any} object value for check is object
 * @returns {boolean} return true if value is a object
 * @example
 *
 * isObject({ name: 'test' })
 * // => true
 */
const isObject = (object) => typeof object === 'object' && !object.length;

module.exports = {
  isEqual, clone, clones, isEmpty, merge, isObject,
};
