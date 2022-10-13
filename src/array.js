const merge = (array, arrayToMerge) => {
  const arrayMerged = array;
  arrayToMerge.forEach((elmnt) => arrayMerged.push(elmnt));
  return arrayMerged;
};

const clone = (array) => array.map((elmnt) => elmnt);

const diff = (arrayOne, arrayTwo) => arrayOne
  .filter((elmnt) => !arrayTwo.includes(elmnt))
  .concat(arrayTwo.filter((elmnt) => !arrayOne.includes(elmnt)));

module.exports = { merge, clone, diff };
