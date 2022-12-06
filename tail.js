const tail = function(array) {
  if (array.length !== 0 && Array.isArray(array) === true) {
    return array.slice(1, array.length);
  } else if (array.length === 0 || array.length === 1) {
    return [];
  }
};

module.exports = tail;