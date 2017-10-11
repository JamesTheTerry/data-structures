var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    // store value at tail
    storage[tail] = value;
    // increase tail by uno (find english translation library later)
    tail++;
  };

  someInstance.dequeue = function() {
    var headLocation = storage[head];
    if (someInstance.size() > 0) {
      // store head
      var output = headLocation;
      // increase head count by 1
      head++;
      // delete head
      delete headLocation;
      // return stored head
      return output;
    }
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
