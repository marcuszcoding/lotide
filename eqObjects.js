const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1)
  let obj2 = Object.keys(object2)
  if (obj1.length !== obj2.length) {
    return false
  } else {
    for (const key in object1) {
      console.log(object1[key]) //making sure we are returning the value of the key
      // if (object1[key] !== object2[key]{
      //   return false
      // } 
    }
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false