const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  };
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

//odd
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
//even
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
//Arrays with 1-2 elements = []
// Arrays with odd elements should return a single element
// Arrays with even elements should return 2 elements