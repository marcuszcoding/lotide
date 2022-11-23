const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
// Need empty object to return resulting letter + count
  let results = {}; // Result being the numbet count of letters paired.
  for (let letters of string) { // Loop needs to go through the letters of the string
    if (letters !== " ") { // Implemented to not take in blank spaces
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
assertEqual(countLetters("lighthouse in the house").l, 1);