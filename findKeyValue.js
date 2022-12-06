const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Main goal: to make a function that takes in an object and a value
// This function must look for the value in the created object and
// return the key if it is in the object, or undefined if it is not
// Recommended for of loop and Object.keys
const findKeyByValue = function(object, value) {
  const objKeys = Object.keys(object); // Variable that puts the objects key names in an array
  for (const key of objKeys) {
    if (object[key] === value) { // If the value is is located object[key]
      return key; // returns paired key and if not found already returns undefined
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;