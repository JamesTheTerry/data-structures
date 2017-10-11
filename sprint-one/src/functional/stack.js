var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageCount = 0;
  
  // Implement the methods below
  someInstance.push = function(value) {
    storage[storageCount] = value;
    storageCount++;
  }; 

  someInstance.pop = function() {
    var location = storage[storageCount - 1];
    if (storageCount > 0) {
      var output = location;
      // storage[storageCount - 1 ] = undefined;
      delete location;
      storageCount--;
      return output;
    }
  };

  someInstance.size = function() {
    return storageCount;
  };

  return someInstance;
};
