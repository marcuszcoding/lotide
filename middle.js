const middle = function(array) {
  let finalArray = [];
  if (array.length <= 2) {
    return finalArray;
  } else if (array.length % 2 === 0) {
    finalArray.push(array[array.length / 2 - 1]);
    finalArray.push(array[array.length / 2]);
    return finalArray;
  } else {
    finalArray.push(array[array.length / 2 - 0.5]);
  }
  return finalArray;
};

module.exports = middle