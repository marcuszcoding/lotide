const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Passed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  console.log(result);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
