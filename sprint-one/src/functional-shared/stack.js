var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  
  someInstance.storage = {};
  someInstance.storageSize = 0;
  
  // someInstance.push = stackMethods.push;
  // someInstance.pop = stackMethods.pop;
  // someInstance.size = stackMethods.size;

  extend(someInstance, stackMethods);
  
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};


stackMethods.push = function (value) {
  // input value set equal to the storage[storageSize]
  this.storage[this.storageSize] = value;
  // increase storageSize
  this.storageSize++;
  
};

stackMethods.pop = function () {
  if (this.storageSize > 0) {
    var storageLocation = this.storage[this.storageSize - 1];
    var output = storageLocation;
    delete storageLocation;
    this.storageSize--;
    return output;
  }
};

stackMethods.size = function () {
  return this.storageSize;
};