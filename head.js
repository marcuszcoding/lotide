const head = function(array) {
  if (array.length !== 0 && Array.isArray(array) === true) {
    return array[0];
  }
};

module.exports = head