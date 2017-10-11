var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstances = Object.create(Stack.prototype);
  someInstances.storage = {};
  someInstances.storageSize = 0;


  return someInstances;
};

var stackMethods = {};

Stack.prototype.push = function(value) {
  // take value and insert it onto storage at storageSize
  this.storage[this.storageSize] = value;
  // increase storage size
  this.storageSize++;
};

Stack.prototype.pop = function() {
  // check to see if size is > 0
  if (this.size() > 0) {
    // set storageLocation var to storage[storageSize - 1];
    // set output var to storageLocation var
    // delete storageLocation;
    // return output
    var storageLocation = this.storage[this.storageSize - 1];
    var output = storageLocation;
    delete storageLocation;
    this.storageSize--;
    return output;
  }
};

Stack.prototype.size = function() {
  return this.storageSize;
};