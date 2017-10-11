var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstances = Object.create(stackMethods);
  someInstances.storage = {};
  someInstances.storageSize = 0;


  return someInstances;
};

var stackMethods = {
  push: function(value) {
    // take value and insert it onto storage at storageSize
    this.storage[this.storageSize] = value;
    // increase storage size
    this.storageSize++;
  },
  pop: function() {
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
  },
  size: function() {
    return this.storageSize;
  }
};