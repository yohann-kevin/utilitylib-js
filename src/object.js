/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const isEqual = (objectOne, objectTwo) => JSON.stringify(objectOne) === JSON.stringify(objectTwo);

const clone = (objectToClone) => {
  const objectCloned = {};
  for (const key in objectToClone) objectCloned[key] = objectToClone[key];
  return objectCloned;
};

const clones = (objectsToClone) => objectsToClone.map((object) => clone(object));

const isEmpty = (object) => Object.keys(object).length === 0;

const merge = (object, objectToMerge) => {
  const newObject = object;
  for (const key in objectToMerge) newObject[key] = objectToMerge[key];
  return object;
};

module.exports = {
  isEqual, clone, clones, isEmpty, merge,
};
