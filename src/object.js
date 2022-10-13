const isEqual = (objectOne, objectTwo) => {
  return JSON.stringify(objectOne) === JSON.stringify(objectTwo);
};

const clone = (objectToClone) => {
  const objectCloned = {};
  for (let key in objectToClone) objectCloned[key] = objectToClone[key];
  return objectCloned;
};

const clones = (objectsToClone) => {
  return objectsToClone.map((object) => {
    return clone(object); 
  });
};

const isEmpty = (object) => {
  return Object.keys(object).length === 0;
};

const merge = (object, objectToMerge) => {
  for (let key in objectToMerge) object[key] = objectToMerge[key];
  return object;
};

module.exports = { isEqual, clone, clones, isEmpty, merge };
