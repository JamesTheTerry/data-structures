var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me - fixed
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // store the item in the obj with the key as the item value
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // returns bool if the item exists inside the set
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  // deletes the item from the set
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: avg O(1), worst O(n)
 * contains: avg O(1), worst O(n)
 * remove: avg O(1), worst O(n)
 * this is because we used objects
 */
