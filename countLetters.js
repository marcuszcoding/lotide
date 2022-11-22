const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
// Need empty object to return resulting letter + count
  let results = {};
  for (let letters of string) { //Loop needs to go through the letters of the string
    if (letters !== " ") {
      if (results[letters]) {
        results[letters] += 1; //For letters seen multiple times
      } else {
        results[letters] = 1; //For letters seen once
      }
    }
  }
  return results;
};
// Function should take in a string
// Suggested to use for.. of loop
// Shouldn't take in blank spaces

countLetters("lighthouse in the house");