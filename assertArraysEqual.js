const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqualArray = function(arr1, arr2) {  
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ The arrays are equal! ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ The arrays are not equal! ${arr1} !== ${arr2}`);
  }
};

assertEqualArray([1, 2, 3], [1, 2, 3]);

assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 4])); 
assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3])); 
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 3]));